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
        { event: "Donne le nom d'un DROM situé dans la mer des Caraïbes.", date: "Guadeloupe" },
        { event: "Donne le nom du DROM situé en Amérique du Sud.", date: "Guyane" },
        { event: "Donne le nom du DROM situé dans l'océan Indien.", date: "La Réunion" },
        { event: "Donne le nom du DROM qui est une île volcanique dans l'océan Atlantique.", date: "Martinique" },
        { event: "Donne le nom du DROM situé dans l'océan Pacifique.", date: "Polynésie française" },
        { event: "Quel est le plus grand massif montagneux de France ?", date: "Les Alpes" },
        { event: "Dans quel massif se trouve le Mont Blanc ?", date: "Les Alpes" },
        { event: "Quel massif montagneux sépare la France de l'Espagne ?", date: "Les Pyrénées" },
        { event: "Dans quel massif se trouve le Ballon d'Alsace ?", date: "Les Vosges" },
        { event: "Quel est le point culminant du Massif Central ?", date: "Le Puy de Sancy" },
        { event: "Dans quelle région se trouve la ville de Lille ?", date: "Hauts-de-France" },
        { event: "Dans quelle région se trouve la ville de Marseille ?", date: "Provence-Alpes-Côte d'Azur" },
        { event: "Dans quelle région se trouve la ville de Nantes ?", date: "Pays de la Loire" },
        { event: "Quel est le chef-lieu de la région Nouvelle-Aquitaine ?", date: "Bordeaux" },
        { event: "Quel est le chef-lieu de la région Auvergne-Rhône-Alpes ?", date: "Lyon" },
        { event: "Cite une région française frontalière avec l'Allemagne.", date: "Grand Est" },
        { event: "Cite une région française frontalière avec l'Espagne.", date: "Occitanie" },
        { event: "Cite une région française qui a un littoral sur la Méditerranée.", date: "Provence-Alpes-Côte d'Azur" },
        { event: "Cite une région française qui a un littoral sur l'océan Atlantique.", date: "Nouvelle-Aquitaine" },
        { event: "Quelle est la plus grande métropole de France ?", date: "Paris" },
        { event: "Quelle est la deuxième métropole de France par la population ?", date: "Marseille" },
        { event: "Quelle est la troisième métropole de France ?", date: "Lyon" },
        { event: "Quelle est la quatrième métropole de France ?", date: "Toulouse" },
        { event: "Quelle est la cinquième métropole de France ?", date: "Nice" },
        { event: "Quelle est la sixième métropole de France ?", date: "Nantes" },
        { event: "Quelle est la septième métropole de France ?", date: "Montpellier" },
        { event: "Quelle est la huitième métropole de France ?", date: "Strasbourg" },
        { event: "Quelle est la neuvième métropole de France ?", date: "Bordeaux" },
        { event: "Quelle est la dixième métropole de France ?", date: "Lille" }
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
        { event: "Auteur de 'Germinal'", date: "Émile Zola" },
        { event: "Définition d'une métaphore", date: "Comparaison sans outil de comparaison" },
        { event: "Définition d'une hyperbole", date: "Exagération" },
        { event: "Définition d'une anaphore", date: "Répétition d’un mot ou groupe de mots en début de phrase" },
        { event: "Définition d'une personnification", date: "Attribuer des caractéristiques humaines à un objet ou animal" },
        { event: "Définition d'une ellipse", date: "Omission volontaire d’un ou plusieurs mots" },
        { event: "Définition d'une allitération", date: "Répétition d’un même son consonne" },
        { event: "Définition d'une assonance", date: "Répétition d’un même son voyelle" },
        { event: "Qu'est-ce qu'un champ lexical ?", date: "Ensemble de mots liés à un même thème" },
        { event: "Qu'est-ce qu'une proposition subordonnée relative ?", date: "Proposition introduite par un pronom relatif" },
        { event: "Qu'est-ce qu'une proposition subordonnée conjonctive ?", date: "Proposition introduite par une conjonction de subordination" },
        { event: "Quel est le mode du verbe dans 'Il faut que tu viennes' ?", date: "Subjonctif" },
        { event: "Quel est le temps du verbe dans 'J'avais mangé' ?", date: "Plus-que-parfait" },
        { event: "Quel est le temps du verbe dans 'Je mangeais' ?", date: "Imparfait" },
        { event: "Quel est le temps du verbe dans 'Nous aurons fini' ?", date: "Futur antérieur" },
        { event: "Quel est le temps du verbe dans 'Vous eûtes parlé' ?", date: "Passé antérieur" },
        { event: "Quel est le mode du verbe dans 'Mangeons !' ?", date: "Impératif" }
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
let baseTime = 10;

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
        baseTime = 10;
    } else if (theme === 'maths_difficile') {
        originalQuiz = quizzes.maths.difficile.slice();
        selectedQuiz = shuffle(quizzes.maths.difficile.slice()).slice(0, 10);
        baseTime = 20;
    } else {
        originalQuiz = quizzes[theme].slice();
        selectedQuiz = shuffle(quizzes[theme].slice()).slice(0, 10);
        baseTime = 10;
    }
    currentQuestion = 0;
    userAnswers = [];
    timeLeft = baseTime;
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
    timeLeft = baseTime;
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

function afficherBestTimes(userId) {
    db.collection('users').doc(userId).get().then(doc => {
        if (doc.exists) {
            const bestTimes = doc.data().bestTimes || {};
            let html = '<table style="margin:auto;"><tr><th>Matière</th><th>Meilleur temps (s)</th></tr>';
            for (const matiere in bestTimes) {
                html += `<tr><td>${matiere}</td><td>${bestTimes[matiere]}</td></tr>`;
            }
            html += '</table>';
            document.getElementById('best-global-time').innerHTML = html;
        } else {
            document.getElementById('best-global-time').innerHTML = "Aucun résultat enregistré.";
        }
    });
}

db.collection('users').doc(userId).set({
    bestTimes: { histoire: 42.5 }
}, { merge: true });

db.collection('users').doc(userId).get().then(doc => {
    if (doc.exists) {
        const data = doc.data();
        // Utilise data.bestTimes ici
    }
});

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        afficherBestTimes(user.uid);
    }
});

