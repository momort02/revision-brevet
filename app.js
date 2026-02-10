// ============ VARIABLES GLOBALES ============
let currentSubject = '';
let currentQuizData = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let quizTimer = null;
let timeRemaining = 0;
let quizStartTime = 0;
let totalQuizTime = 0;

// ============ GESTION DE L'AUTHENTIFICATION ============

// Écouter les changements d'état d'authentification
auth.onAuthStateChanged((user) => {
    if (user) {
        currentUser = user;
        showMainScreen();
        loadUserData();
    } else {
        currentUser = null;
        showAuthScreen();
    }
});

function showAuthScreen() {
    document.getElementById('auth-screen').classList.add('active');
    document.getElementById('main-screen').classList.remove('active');
}

function showMainScreen() {
    document.getElementById('auth-screen').classList.remove('active');
    document.getElementById('main-screen').classList.add('active');
}

// Connexion
async function loginUser() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        showError("Veuillez remplir tous les champs");
        return;
    }
    
    try {
        await auth.signInWithEmailAndPassword(email, password);
        clearError();
    } catch (error) {
        showError(getErrorMessage(error.code));
    }
}

// Inscription
async function signupUser() {
    const pseudo = document.getElementById('signup-pseudo').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    
    if (!pseudo || !email || !password) {
        showError("Veuillez remplir tous les champs");
        return;
    }
    
    if (password.length < 6) {
        showError("Le mot de passe doit contenir au moins 6 caractères");
        return;
    }
    
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        // Créer le profil utilisateur dans Firestore
        await db.collection('users').doc(user.uid).set({
            pseudo: pseudo,
            email: email,
            bestTimes: {},
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        clearError();
    } catch (error) {
        showError(getErrorMessage(error.code));
    }
}

// Déconnexion
async function logoutUser() {
    try {
        await auth.signOut();
    } catch (error) {
        console.error("Erreur lors de la déconnexion:", error);
    }
}

// Gérer les onglets de connexion/inscription
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        
        // Mettre à jour les boutons
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Mettre à jour les formulaires
        document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
        document.getElementById(`${tab}-tab`).classList.add('active');
        
        clearError();
    });
});

// Afficher les erreurs
function showError(message) {
    const errorDiv = document.getElementById('auth-error');
    errorDiv.textContent = message;
    errorDiv.classList.add('show');
}

function clearError() {
    const errorDiv = document.getElementById('auth-error');
    errorDiv.textContent = '';
    errorDiv.classList.remove('show');
}

// Messages d'erreur en français
function getErrorMessage(errorCode) {
    const messages = {
        'auth/email-already-in-use': 'Cette adresse email est déjà utilisée',
        'auth/invalid-email': 'Adresse email invalide',
        'auth/user-not-found': 'Aucun utilisateur trouvé avec cette adresse',
        'auth/wrong-password': 'Mot de passe incorrect',
        'auth/weak-password': 'Le mot de passe doit contenir au moins 6 caractères',
        'auth/too-many-requests': 'Trop de tentatives. Réessayez plus tard',
        'auth/network-request-failed': 'Erreur de connexion. Vérifiez votre connexion internet'
    };
    return messages[errorCode] || 'Une erreur est survenue. Veuillez réessayer';
}

// ============ CHARGEMENT DES DONNÉES UTILISATEUR ============

async function loadUserData() {
    if (!currentUser) return;
    
    try {
        const userDoc = await db.collection('users').doc(currentUser.uid).get();
        if (userDoc.exists) {
            const userData = userDoc.data();
            document.getElementById('user-pseudo').textContent = userData.pseudo || 'Étudiant';
            displayUserStats(userData.bestTimes || {});
        }
    } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
    }
}

function displayUserStats(bestTimes) {
    const statsContainer = document.getElementById('user-stats');
    
    if (Object.keys(bestTimes).length === 0) {
        statsContainer.innerHTML = '<p style="color: var(--color-text-muted); text-align: center;">Aucun résultat enregistré. Commencez un quiz !</p>';
        return;
    }
    
    let statsHTML = '';
    for (const [subject, time] of Object.entries(bestTimes)) {
        statsHTML += `
            <div class="stat-item">
                <div class="stat-label">${subjectNames[subject]}</div>
                <div class="stat-value">${time.toFixed(1)}s</div>
            </div>
        `;
    }
    
    statsContainer.innerHTML = statsHTML;
}

// ============ NAVIGATION ENTRE LES SECTIONS ============

function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function selectSubject(subject) {
    currentSubject = subject;
    
    if (subject === 'maths') {
        showSection('maths-level');
    } else {
        startQuiz(subject);
    }
}

function backToSubjects() {
    showSection('subject-menu');
    stopQuizTimer();
}

// ============ GESTION DU QUIZ ============

function startQuiz(subject) {
    currentSubject = subject;
    
    // Récupérer les données du quiz
    const allQuestions = quizData[subject];
    if (!allQuestions) {
        console.error("Matière introuvable:", subject);
        return;
    }
    
    // Mélanger et prendre 10 questions
    currentQuizData = shuffleArray([...allQuestions]).slice(0, 10);
    currentQuestionIndex = 0;
    userAnswers = [];
    quizStartTime = Date.now();
    
    showSection('quiz-section');
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex >= currentQuizData.length) {
        endQuiz();
        return;
    }
    
    const question = currentQuizData[currentQuestionIndex];
    const correctAnswer = question.answer;
    
    // Mettre à jour le compteur de questions
    document.getElementById('question-counter').textContent = 
        `Question ${currentQuestionIndex + 1}/${currentQuizData.length}`;
    
    // Mettre à jour la barre de progression
    const progressPercent = ((currentQuestionIndex) / currentQuizData.length) * 100;
    document.getElementById('progress-fill').style.width = `${progressPercent}%`;
    
    // Afficher la question
    const questionTextEl = document.getElementById('question-text');
    questionTextEl.textContent = question.question;
    
    // Si c'est une question avec carte, afficher la carte
    if (question.type === 'map' && question.image && question.imageTarget) {
        const mapHTML = generateMap(question.image, question.imageTarget);
        const mapContainer = document.createElement('div');
        mapContainer.className = 'question-map-container';
        mapContainer.innerHTML = `
            <p class="map-instruction">👇 Observez la zone mise en évidence sur la carte</p>
            ${mapHTML}
        `;
        questionTextEl.insertAdjacentElement('afterend', mapContainer);
    }
    
    // Générer les options de réponse
    const wrongAnswers = getWrongAnswers(currentSubject, correctAnswer, question.type);
    const allOptions = shuffleArray([correctAnswer, ...wrongAnswers]);
    
    // Afficher les options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    allOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => selectAnswer(option);
        optionsContainer.appendChild(btn);
    });
    
    // Démarrer le timer
    startQuizTimer();
}

function getWrongAnswers(subject, correctAnswer, questionType = 'text') {
    // D'abord essayer de prendre des réponses du même type
    let allAnswers = quizData[subject]
        .filter(q => q.type === questionType)
        .map(q => q.answer)
        .filter(a => a !== correctAnswer);
    
    // Si pas assez de réponses du même type, prendre aussi les autres types
    if (allAnswers.length < 3) {
        const otherAnswers = quizData[subject]
            .filter(q => q.type !== questionType)
            .map(q => q.answer)
            .filter(a => a !== correctAnswer && !allAnswers.includes(a));
        allAnswers = [...allAnswers, ...otherAnswers];
    }
    
    return shuffleArray(allAnswers).slice(0, 3);
}

function selectAnswer(selectedAnswer) {
    stopQuizTimer();
    
    const question = currentQuizData[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.answer;
    
    // Enregistrer la réponse
    userAnswers.push({
        question: question.question,
        correctAnswer: question.answer,
        userAnswer: selectedAnswer,
        isCorrect: isCorrect
    });
    
    // Afficher visuellement la bonne/mauvaise réponse
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === question.answer) {
            btn.classList.add('correct');
        }
        if (btn.textContent === selectedAnswer && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    // Passer à la question suivante après un délai
    setTimeout(() => {
        // Supprimer la carte si elle existe
        const mapContainer = document.querySelector('.question-map-container');
        if (mapContainer) {
            mapContainer.remove();
        }
        
        currentQuestionIndex++;
        displayQuestion();
    }, 1000);
}

function startQuizTimer() {
    timeRemaining = timePerQuestion[currentSubject] || 10;
    updateTimerDisplay();
    
    quizTimer = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            stopQuizTimer();
            selectAnswer("Pas de réponse");
        }
    }, 1000);
}

function stopQuizTimer() {
    if (quizTimer) {
        clearInterval(quizTimer);
        quizTimer = null;
    }
}

function updateTimerDisplay() {
    document.getElementById('timer-text').textContent = timeRemaining;
    
    const maxTime = timePerQuestion[currentSubject] || 10;
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (timeRemaining / maxTime) * circumference;
    
    document.getElementById('timer-progress').style.strokeDasharray = circumference;
    document.getElementById('timer-progress').style.strokeDashoffset = offset;
}

function quitQuiz() {
    if (confirm("Êtes-vous sûr de vouloir quitter le quiz ? Votre progression sera perdue.")) {
        stopQuizTimer();
        backToSubjects();
    }
}

function retryQuiz() {
    startQuiz(currentSubject);
}

// ============ FIN DU QUIZ ET RÉSULTATS ============

async function endQuiz() {
    stopQuizTimer();
    totalQuizTime = (Date.now() - quizStartTime) / 1000; // Temps en secondes
    
    showSection('results-section');
    displayResults();
    await saveResults();
}

function displayResults() {
    const score = userAnswers.filter(a => a.isCorrect).length;
    const total = userAnswers.length;
    
    // Afficher le score
    document.getElementById('final-score').textContent = `${score}/${total}`;
    
    // Message selon le score
    let message = '';
    const percentage = (score / total) * 100;
    if (percentage === 100) message = "Parfait ! 🎉";
    else if (percentage >= 80) message = "Excellent travail ! 🌟";
    else if (percentage >= 60) message = "Bien joué ! 👍";
    else if (percentage >= 40) message = "Continue à t'entraîner ! 💪";
    else message = "Ne te décourage pas ! 📚";
    
    document.getElementById('score-message').textContent = message;
    
    // Afficher le temps
    document.getElementById('time-info').textContent = 
        `Temps total : ${totalQuizTime.toFixed(1)} secondes`;
    
    // Tableau des résultats
    let tableHTML = `
        <thead>
            <tr>
                <th>Question</th>
                <th>Ta réponse</th>
                <th>Bonne réponse</th>
                <th>Résultat</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    userAnswers.forEach(answer => {
        const resultIcon = answer.isCorrect ? '✅' : '❌';
        const resultColor = answer.isCorrect ? 'var(--color-success)' : 'var(--color-danger)';
        
        tableHTML += `
            <tr>
                <td>${answer.question}</td>
                <td style="color: ${resultColor}">${answer.userAnswer}</td>
                <td>${answer.correctAnswer}</td>
                <td>${resultIcon}</td>
            </tr>
        `;
    });
    
    tableHTML += '</tbody>';
    document.getElementById('results-table').innerHTML = tableHTML;
}

async function saveResults() {
    if (!currentUser) return;
    
    try {
        const userRef = db.collection('users').doc(currentUser.uid);
        const userDoc = await userRef.get();
        
        if (userDoc.exists) {
            const userData = userDoc.data();
            const bestTimes = userData.bestTimes || {};
            
            // Vérifier si c'est un nouveau record
            const isNewRecord = !bestTimes[currentSubject] || totalQuizTime < bestTimes[currentSubject];
            
            if (isNewRecord) {
                bestTimes[currentSubject] = totalQuizTime;
                await userRef.update({ bestTimes: bestTimes });
                
                // Afficher le message de nouveau record
                const timeInfo = document.getElementById('time-info');
                timeInfo.classList.add('new-record');
                timeInfo.innerHTML += ' <br>🏆 Nouveau record !';
            }
            
            // Recharger les stats
            loadUserData();
        }
    } catch (error) {
        console.error("Erreur lors de la sauvegarde des résultats:", error);
    }
}

// ============ CLASSEMENT ============

async function showLeaderboard() {
    showSection('leaderboard-section');
    await loadLeaderboard();
}

function closeLeaderboard() {
    showSection('subject-menu');
}

async function loadLeaderboard() {
    const leaderboardContent = document.getElementById('leaderboard-content');
    leaderboardContent.innerHTML = '<p style="text-align: center;">Chargement...</p>';
    
    try {
        const usersSnapshot = await db.collection('users').get();
        const subjects = ['histoire', 'geo', 'emc', 'francais', 'maths_facile', 'maths_difficile'];
        
        let leaderboardHTML = '';
        
        for (const subject of subjects) {
            const rankings = [];
            
            usersSnapshot.forEach(doc => {
                const data = doc.data();
                if (data.bestTimes && data.bestTimes[subject]) {
                    rankings.push({
                        pseudo: data.pseudo || 'Anonyme',
                        time: data.bestTimes[subject]
                    });
                }
            });
            
            // Trier par temps croissant
            rankings.sort((a, b) => a.time - b.time);
            
            if (rankings.length > 0) {
                leaderboardHTML += `
                    <div class="leaderboard-section">
                        <h3>${subjectNames[subject]}</h3>
                        <table class="leaderboard-table">
                            <thead>
                                <tr>
                                    <th>Rang</th>
                                    <th>Pseudo</th>
                                    <th>Temps</th>
                                </tr>
                            </thead>
                            <tbody>
                `;
                
                rankings.slice(0, 10).forEach((rank, index) => {
                    const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '';
                    leaderboardHTML += `
                        <tr>
                            <td><span class="rank-medal">${medal}</span> ${index + 1}</td>
                            <td>${rank.pseudo}</td>
                            <td>${rank.time.toFixed(1)}s</td>
                        </tr>
                    `;
                });
                
                leaderboardHTML += `
                            </tbody>
                        </table>
                    </div>
                `;
            }
        }
        
        if (leaderboardHTML === '') {
            leaderboardHTML = '<p style="text-align: center; color: var(--color-text-muted);">Aucun classement disponible pour le moment.</p>';
        }
        
        leaderboardContent.innerHTML = leaderboardHTML;
    } catch (error) {
        console.error("Erreur lors du chargement du classement:", error);
        leaderboardContent.innerHTML = '<p style="text-align: center; color: var(--color-danger);">Erreur lors du chargement du classement.</p>';
    }
}

// ============ CONTRÔLES MUSIQUE ============

const musicToggle = document.getElementById('music-toggle');
const musicSelect = document.getElementById('music-select');
const backgroundMusic = document.getElementById('background-music');

let isMusicPlaying = false;

musicToggle.addEventListener('click', () => {
    if (!backgroundMusic.src) {
        if (musicSelect.value) {
            backgroundMusic.src = musicSelect.value;
        } else {
            return;
        }
    }
    
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicToggle.textContent = '🎵';
        isMusicPlaying = false;
    } else {
        backgroundMusic.play().catch(e => console.log("Erreur lecture audio:", e));
        musicToggle.textContent = '🔇';
        isMusicPlaying = true;
    }
});

musicSelect.addEventListener('change', () => {
    if (musicSelect.value) {
        backgroundMusic.src = musicSelect.value;
        backgroundMusic.volume = 0.3;
        if (isMusicPlaying) {
            backgroundMusic.play().catch(e => console.log("Erreur lecture audio:", e));
        }
    } else {
        backgroundMusic.pause();
        backgroundMusic.src = '';
        isMusicPlaying = false;
        musicToggle.textContent = '🎵';
    }
});

// ============ FONCTIONS UTILITAIRES ============

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// ============ INITIALISATION ============

console.log("🎓 Quiz Brevet chargé avec succès !");
