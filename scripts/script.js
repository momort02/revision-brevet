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
    ]
};

let originalQuiz = [];
let selectedQuiz = [];
let currentQuestion = 0;
let userAnswers = [];
let timer;
let timeLeft = 10;

function startQuiz(theme) {
    originalQuiz = [...quizzes[theme]];
    selectedQuiz = shuffle([...originalQuiz]);
    currentQuestion = 0;
    userAnswers = [];
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
    timeLeft = 10;

    if(currentQuestion >= selectedQuiz.length){
        showCorrection();
        return;
    }

    const questionObj = selectedQuiz[currentQuestion];
    document.getElementById('question').textContent = `Quelle est la date / réponse de : ${questionObj.event} ?`;

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