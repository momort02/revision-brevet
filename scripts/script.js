const quizzes = {
    histoire: [
        {event: "Première Guerre mondiale", date: "1914-1918"},
        {event: "Révolution Russe", date: "1917"},
        {event: "Allemagne d'Hitler", date: "1933-1945"},
        {event: "Front populaire", date: "1936"},
        {event: "Seconde Guerre mondiale", date: "1939-1945"},
        {event: "Libération, De Gaulle, droit de vote des femmes, Sécurité sociale", date: "1944-1945"},
        {event: "Création de l'ONU", date: "1947"},
        {event: "Guerre froide", date: "1947-1991"},
        {event: "Traité de Rome", date: "1957"},
        {event: "Indépendance de l'Algérie", date: "1962"},
        {event: "Chute du mur de Berlin", date: "1989"},
        {event: "Fondation de la Vème République", date: "1958"},
        {event: "Suffrage universel du président de la République", date: "1962"},
        {event: "Loi sur l'IVG", date: "1975"},
        {event: "1ère élection de François Mitterrand", date: "1981"}
    ],
    geo: [
        {event: "Nombre d'habitants en France métropolitaine", date: "67 millions"},
        {event: "Nombre d'habitants à Paris", date: "2,1 millions"},
        {event: "Pourcentage d’urbains en France", date: "80%"},
        {event: "Nombre de régions en France", date: "13"},
        {event: "Date de création de l'UE", date: "1993"}
    ],
    emc: [
        {event: "Devise de la République Française", date: "Liberté, Égalité, Fraternité"},
        {event: "Valeur fondamentale de la laïcité", date: "Respect de toutes les croyances"},
        {event: "Droit d'expression reconnu par", date: "Déclaration des Droits de l’Homme et du Citoyen (1789)"},
        {event: "Date de l'abolition de l'esclavage en France", date: "1848"}
    ],
    maths: [
        {event: "Valeur de π arrondie à 2 décimales", date: "3.14"},
        {event: "Formule de l’aire d’un cercle", date: "π × r²"},
        {event: "Théorème utilisé pour les triangles rectangles", date: "Pythagore"},
        {event: "Formule du périmètre d’un cercle", date: "2 × π × r"},
        {event: "Formule du discriminant", date: "Δ = b² - 4ac"},
        {event: "Résolution d’une équation du 1er degré", date: "ax + b = 0"},
        {event: "Valeur de √16", date: "4"},
        {event: "Angle d’un triangle équilatéral", date: "60°"},
        {event: "Somme des angles d’un triangle", date: "180°"},
        {event: "Unité de volume dans le système international", date: "m³"},
        {event: "Formule de l’aire d’un rectangle", date: "L × l"},
        {event: "Formule du volume d’un cylindre", date: "π × r² × h"},
        {event: "Nom de l'axe horizontal d’un repère", date: "Axe des abscisses"},
        {event: "Nom de l'axe vertical d’un repère", date: "Axe des ordonnées"},
        {event: "Valeur de 0!", date: "1"},
        {event: "Multiplicatif neutre", date: "1"},
        {event: "Additif neutre", date: "0"},
        {event: "Moyenne de 4, 8 et 12", date: "8"},
        {event: "Résultat de 2³", date: "8"},
        {event: "Résultat de 5 × 0", date: "0"}
    ],
    francais: [
        {event: "Temps utilisé pour une action passée et terminée", date: "Passé simple"},
        {event: "Synonyme de 'joyeux'", date: "Heureux"},
        {event: "Nature du mot 'rapidement'", date: "Adverbe"},
        {event: "Temps de la phrase : 'Il avait mangé'", date: "Plus-que-parfait"},
        {event: "Forme de discours qui rapporte des paroles exactement", date: "Discours direct"},
        {event: "Personne qui raconte une histoire", date: "Narrateur"},
        {event: "Nom commun : 'arbre' est...", date: "Masculin singulier"},
        {event: "Antonyme de 'sombre'", date: "Clair"},
        {event: "Temps de la phrase : 'Qu'il vienne'", date: "Subjonctif présent"},
        {event: "Type de phrase : 'Quelle belle journée!'", date: "Exclamative"},
        {event: "Nombre de syllabes dans 'éléphant'", date: "3"},
        {event: "Mode du verbe dans 'il faut que tu viennes'", date: "Subjonctif"},
        {event: "Synonyme de 'maison'", date: "Habitation"},
        {event: "Forme du mot 'beaux' au singulier", date: "Beau"},
        {event: "Nature du mot 'entre'", date: "Préposition"},
        {event: "Pronom personnel sujet 3e personne singulier", date: "Il"},
        {event: "Déterminant possessif 1ère personne singulier", date: "Mon"},
        {event: "Nom de l'étude des sons en langue", date: "Phonétique"},
        {event: "Type de texte pour convaincre", date: "Argumentatif"},
        {event: "Genre du mot 'voiture'", date: "Féminin"}
    ]
};

let originalQuiz = [];
let selectedQuiz = [];
let currentQuestion = 0;
let userAnswers = [];
let timer;
let timeLeft = 10;
let selectedTheme = "";

function startQuiz(theme) {
    originalQuiz = [...quizzes[theme]];
    selectedQuiz = shuffle([...originalQuiz]);
    currentQuestion = 0;
    userAnswers = [];
    selectedTheme = theme;

    // Définir le temps selon la matière
    if(theme === 'maths') {
        timeLeft = 20;
    } else {
        timeLeft = 10;
    }

    document.getElementById('menu').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    resetQuizView();
    showQuestion();
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function resetQuizView() {
    document.getElementById('quiz').innerHTML = `
        <h2 id="question"></h2>
        <div id="timer" style="font-size: 20px; margin: 10px;"></div>
        <div id="options"></div>
    `;
}

function showQuestion() {
    clearInterval(timer);

    // Réinitialiser le timer selon la matière
    if(selectedTheme === 'maths') {
        timeLeft = 20;
    } else {
        timeLeft = 10;
    }

    if(currentQuestion >= selectedQuiz.length){
        showCorrection();
        return;
    }

    const questionObj = selectedQuiz[currentQuestion];
    document.getElementById('question').textContent = `Quelle est la réponse à : ${questionObj.event} ?`;

    let wrongAnswers = originalQuiz.filter(e => e.date !== questionObj.date).map(e => e.date);
    wrongAnswers = shuffle(wrongAnswers).slice(0,3);

    const options = shuffle([questionObj.date, ...wrongAnswers]);

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.className = 'option-btn';
        btn.onclick = () => selectAnswer(option);
        optionsDiv.appendChild(btn);
    });

    updateTimer();
    timer = setInterval(() => {
        timeLeft--;
        updateTimer();
        if(timeLeft <= 0){
            clearInterval(timer);
            selectAnswer("Non répondu");
        }
    }, 1000);
}

function updateTimer() {
    document.getElementById('timer').textContent = `Temps restant : ${timeLeft} secondes`;
}

function selectAnswer(selected) {
    clearInterval(timer);
    userAnswers.push({
        question: selectedQuiz[currentQuestion].event,
        correctAnswer: selectedQuiz[currentQuestion].date,
        userAnswer: selected
    });

    currentQuestion++;
    setTimeout(showQuestion, 300);
}

function showCorrection() {
    let score = 0;
    let correctionHTML = "<h2>Corrigé du Quiz</h2><table border='1' style='width:100%; text-align:center;'><tr><th>Question</th><th>Ta réponse</th><th>Bonne réponse</th><th>Résultat</th></tr>";

    userAnswers.forEach(answer => {
        const isCorrect = answer.userAnswer === answer.correctAnswer;
        if(answer.userAnswer === "Non répondu") {
            correctionHTML += `<tr>
                <td>${answer.question}</td>
                <td style="color:orange;">Non répondu</td>
                <td>${answer.correctAnswer}</td>
                <td style="color:orange;">⏱️</td>
            </tr>`;
        } else {
            if(isCorrect) score++;
            correctionHTML += `<tr>
                <td>${answer.question}</td>
                <td>${answer.userAnswer}</td>
                <td>${answer.correctAnswer}</td>
                <td style="color:${isCorrect ? 'green' : 'red'};">${isCorrect ? '✔️' : '❌'}</td>
            </tr>`;
        }
    });

    correctionHTML += `</table><p>Score final : ${score} / ${selectedQuiz.length}</p>`;
    correctionHTML += `<button onclick="returnToMenu()">Retour au menu</button>`;

    document.getElementById('quiz').innerHTML = correctionHTML;
}

function returnToMenu() {
    clearInterval(timer);
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    resetQuizView();
} 
