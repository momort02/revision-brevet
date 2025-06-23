const quizzes = {
    histoire: [
        { event: "Première Guerre mondiale", date: "1914-1918" },
        { event: "Révolution Russe", date: "1917" },
        { event: "Allemagne d'Hitler", date: "1933-1945" },
        { event: "Front populaire", date: "1936" },
        { event: "Seconde Guerre mondiale", date: "1939-1945" },
        { event: "Libération, De Gaulle, droit de vote des femmes, Sécurité sociale", date: "1944-1945" },
        { event: "Création de l'ONU", date: "1947" },
        { event: "Guerre froide", date: "1947-1991" },
        { event: "Traité de Rome", date: "1957" },
        { event: "Indépendance de l'Algérie", date: "1962" },
        { event: "Chute du mur de Berlin", date: "1989" },
        { event: "Fondation de la Vème République", date: "1958" },
        { event: "Suffrage universel du président de la République", date: "1962" },
        { event: "Loi sur l'IVG", date: "1975" },
        { event: "1ère élection de François Mitterrand", date: "1981" }
    ],
    geo: [
        { event: "Nombre d'habitants en France métropolitaine", date: "67 millions" },
        { event: "Nombre d'habitants à Paris", date: "2,1 millions" },
        { event: "Pourcentage d’urbains en France", date: "80%" },
        { event: "Nombre de régions en France", date: "13" },
        { event: "Date de création de l'UE", date: "1993" }
    ],
    emc: [
        { event: "Devise de la République Française", date: "Liberté, Égalité, Fraternité" },
        { event: "Valeur fondamentale de la laïcité", date: "Respect de toutes les croyances" },
        { event: "Droit d'expression reconnu par", date: "Déclaration des Droits de l’Homme et du Citoyen (1789)" },
        { event: "Date de l'abolition de l'esclavage en France", date: "1848" }
    ],
    francais: [
        { event: "Auteur de 'Le Petit Prince'", date: "Antoine de Saint-Exupéry" },
        { event: "Auteur de 'Les Misérables'", date: "Victor Hugo" },
        { event: "Auteur de 'L'Étranger'", date: "Albert Camus" },
        { event: "Auteur de 'Germinal'", date: "Émile Zola" }
    ],
    maths: {
        facile: [
            { event: "Combien font 7 + 5 ?", date: "12" },
            { event: "Combien font 9 × 3 ?", date: "27" },
            { event: "Combien font 15 − 4 ?", date: "11" },
            { event: "Combien font 36 ÷ 6 ?", date: "6" },
            { event: "Combien font 2² ?", date: "4" },
            { event: "Résultat de 10% de 200 ?", date: "20" },
            { event: "Combien font 5 × 5 ?", date: "25" },
            { event: "Combien font 100 ÷ 10 ?", date: "10" },
            { event: "Combien font 3 + 8 ?", date: "11" },
            { event: "Quelle est la moitié de 50 ?", date: "25" },
            { event: "Combien font 4 × 6 ?", date: "24" },
            { event: "Combien font 81 ÷ 9 ?", date: "9" },
            { event: "Quelle est la racine carrée de 25 ?", date: "5" },
            { event: "Combien font 12 + 13 ?", date: "25" },
            { event: "Quel est le tiers de 90 ?", date: "30" },
            { event: "Combien font 0 × 56 ?", date: "0" },
            { event: "Quel est l'inverse de 4 ?", date: "0.25" },
            { event: "Combien font 8 + 12 ?", date: "20" },
            { event: "Combien font 7 × 7 ?", date: "49" },
            { event: "Combien font 64 ÷ 8 ?", date: "8" }
        ],
        difficile: [
            { event: "Quelle est la valeur de π arrondie à 2 décimales ?", date: "3.14" },
            { event: "Résous l'équation : 2x + 3 = 11", date: "4" },
            { event: "Combien font 5³ ?", date: "125" },
            { event: "Résous l'inéquation : x > 7", date: "x > 7" },
            { event: "Combien font √144 ?", date: "12" },
            { event: "Résous : 3x = 15", date: "5" },
            { event: "Quelle est la dérivée de x² ?", date: "2x" },
            { event: "Combien vaut sin(90°) ?", date: "1" },
            { event: "Résous l'équation : x² = 49", date: "7" },
            { event: "Combien vaut 7 × (2 + 3) ?", date: "35" },
            { event: "Résous l'équation : x/2 = 6", date: "12" },
            { event: "Combien vaut cos(0°) ?", date: "1" },
            { event: "Résous : 4x - 8 = 0", date: "2" },
            { event: "Combien vaut √169 ?", date: "13" },
            { event: "Calcule l'aire d'un carré de côté 5", date: "25" },
            { event: "Résous : 7x + 2 = 16", date: "2" },
            { event: "Combien vaut 2⁴ ?", date: "16" },
            { event: "Donne la formule de l'aire d'un disque", date: "πr²" },
            { event: "Combien vaut ln(e) ?", date: "1" },
            { event: "Résous l'équation : 9x = 81", date: "9" }
        ]
    }
};

let originalQuiz = [];
let selectedQuiz = [];
let currentQuestion = 0;
let userAnswers = [];
let timer;
let timeLeft = 15;

function selectTheme(theme) {
    document.getElementById('quiz').style.display = 'none';
    if (theme === 'maths') {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('maths-level').style.display = 'block';
    } else {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('maths-level').style.display = 'none';
        startQuiz(theme);
    }
}

function startQuiz(theme) {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('maths-level').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';

    if (theme === 'maths_facile') {
        originalQuiz = quizzes.maths.facile.slice();
        selectedQuiz = shuffle(quizzes.maths.facile.slice()).slice(0, 10);
    } else if (theme === 'maths_difficile') {
        originalQuiz = quizzes.maths.difficile.slice();
        selectedQuiz = shuffle(quizzes.maths.difficile.slice()).slice(0, 10);
    } else {
        originalQuiz = quizzes[theme].slice();
        selectedQuiz = shuffle(quizzes[theme].slice()).slice(0, 10);
    }
    currentQuestion = 0;
    userAnswers = [];
    timeLeft = 15;
    resetQuizView();
    showQuestion();
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function resetQuizView() {
    document.getElementById('quiz').innerHTML = `
        <h2 id="question"></h2>
        <div id="timer"></div>
        <div id="options"></div>
    `;
}

function showQuestion() {
    clearInterval(timer);
    if (currentQuestion >= selectedQuiz.length) {
        showCorrection();
        return;
    }
    const questionObj = selectedQuiz[currentQuestion];
    document.getElementById('question').textContent = `Question ${currentQuestion + 1} : ${questionObj.event}`;
    let wrongAnswers = originalQuiz.filter(e => e.date !== questionObj.date).map(e => e.date);
    wrongAnswers = shuffle(wrongAnswers).slice(0, 3);
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
        if (timeLeft <= 0) {
            clearInterval(timer);
            selectAnswer("Non répondu");
        }
    }, 1000);
}

function updateTimer() {
    document.getElementById('timer').textContent = `⏳ Temps restant : ${timeLeft} secondes`;
}

function selectAnswer(selected) {
    clearInterval(timer);
    userAnswers.push({
        question: selectedQuiz[currentQuestion].event,
        correctAnswer: selectedQuiz[currentQuestion].date,
        userAnswer: selected
    });
    currentQuestion++;
    timeLeft = 15;
    setTimeout(showQuestion, 350);
}

function showCorrection() {
    let score = 0;
    let correctionHTML = "<h2>Corrigé du Quiz</h2><table><tr><th>Question</th><th>Ta réponse</th><th>Bonne réponse</th><th>Résultat</th></tr>";
    userAnswers.forEach(answer => {
        const isCorrect = answer.userAnswer === answer.correctAnswer;
        if (answer.userAnswer === "Non répondu") {
            correctionHTML += `<tr>
                <td>${answer.question}</td>
                <td style="color:orange;">Non répondu</td>
                <td>${answer.correctAnswer}</td>
                <td style="color:orange;">⏱️</td>
            </tr>`;
        } else {
            if (isCorrect) score++;
            correctionHTML += `<tr>
                <td>${answer.question}</td>
                <td style="color:${isCorrect ? 'green' : 'red'};">${answer.userAnswer}</td>
                <td>${answer.correctAnswer}</td>
                <td style="color:${isCorrect ? 'green' : 'red'};">${isCorrect ? '✔️' : '❌'}</td>
            </tr>`;
        }
    });
    correctionHTML += `</table><p style="text-align:center;font-size:1.2em;margin-top:18px;">Score final : <b>${score} / ${selectedQuiz.length}</b></p>`;
    correctionHTML += `<button class="back-btn" onclick="returnToMenu()">Retour au menu</button>`;
    document.getElementById('quiz').innerHTML = correctionHTML;
}

function returnToMenu() {
    clearInterval(timer);
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('maths-level').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    resetQuizView();
}

