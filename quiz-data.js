// Données des quiz par matière
const quizData = {
    histoire: [
        { question: "Première Guerre mondiale", answer: "1914-1918", type: "date" },
        { question: "Révolution Russe", answer: "1917", type: "date" },
        { question: "Allemagne d'Hitler", answer: "1933-1945", type: "date" },
        { question: "Front populaire", answer: "1936", type: "date" },
        { question: "Seconde Guerre mondiale", answer: "1939-1945", type: "date" },
        { question: "Libération, De Gaulle, droit de vote des femmes, Sécurité sociale", answer: "1944-1945", type: "date" },
        { question: "Création de l'ONU", answer: "1945", type: "date" },
        { question: "Guerre froide", answer: "1947-1991", type: "date" },
        { question: "Traité de Rome", answer: "1957", type: "date" },
        { question: "Indépendance de l'Algérie", answer: "1962", type: "date" },
        { question: "Chute du mur de Berlin", answer: "1989", type: "date" },
        { question: "Fondation de la Vème République", answer: "1958", type: "date" },
        { question: "Suffrage universel du président de la République", answer: "1962", type: "date" },
        { question: "Loi sur l'IVG", answer: "1975", type: "date" },
        { question: "1ère élection de François Mitterrand", answer: "1981", type: "date" }
    ],
    
    geo: [
        // Questions avec images de cartes - DROM
        { 
            question: "Identifiez ce DROM sur la carte :", 
            answer: "Guadeloupe",
            image: "drom",
            imageTarget: "guadeloupe",
            type: "map"
        },
        { 
            question: "Identifiez ce DROM sur la carte :", 
            answer: "Martinique",
            image: "drom",
            imageTarget: "martinique",
            type: "map"
        },
        { 
            question: "Identifiez ce DROM sur la carte :", 
            answer: "Guyane",
            image: "drom",
            imageTarget: "guyane",
            type: "map"
        },
        { 
            question: "Identifiez ce DROM sur la carte :", 
            answer: "La Réunion",
            image: "drom",
            imageTarget: "reunion",
            type: "map"
        },
        { 
            question: "Identifiez ce DROM sur la carte :", 
            answer: "Mayotte",
            image: "drom",
            imageTarget: "mayotte",
            type: "map"
        },
        
        // Questions avec images de cartes - Régions
        { 
            question: "Quelle région est mise en évidence sur cette carte ?", 
            answer: "Île-de-France",
            image: "regions",
            imageTarget: "ile-de-france",
            type: "map"
        },
        { 
            question: "Quelle région est mise en évidence sur cette carte ?", 
            answer: "Nouvelle-Aquitaine",
            image: "regions",
            imageTarget: "nouvelle-aquitaine",
            type: "map"
        },
        { 
            question: "Quelle région est mise en évidence sur cette carte ?", 
            answer: "Provence-Alpes-Côte d'Azur",
            image: "regions",
            imageTarget: "paca",
            type: "map"
        },
        { 
            question: "Quelle région est mise en évidence sur cette carte ?", 
            answer: "Occitanie",
            image: "regions",
            imageTarget: "occitanie",
            type: "map"
        },
        { 
            question: "Quelle région est mise en évidence sur cette carte ?", 
            answer: "Hauts-de-France",
            image: "regions",
            imageTarget: "hauts-de-france",
            type: "map"
        },
        { 
            question: "Quelle région est mise en évidence sur cette carte ?", 
            answer: "Bretagne",
            image: "regions",
            imageTarget: "bretagne",
            type: "map"
        },
        { 
            question: "Quelle région est mise en évidence sur cette carte ?", 
            answer: "Grand Est",
            image: "regions",
            imageTarget: "grand-est",
            type: "map"
        },
        { 
            question: "Quelle région est mise en évidence sur cette carte ?", 
            answer: "Auvergne-Rhône-Alpes",
            image: "regions",
            imageTarget: "auvergne-rhone-alpes",
            type: "map"
        },
        
        // Questions textuelles classiques - DROM
        { question: "Donne le nom d'un DROM situé dans la mer des Caraïbes.", answer: "Guadeloupe", type: "text" },
        { question: "Donne le nom du DROM situé en Amérique du Sud.", answer: "Guyane", type: "text" },
        { question: "Donne le nom du DROM situé dans l'océan Indien.", answer: "La Réunion", type: "text" },
        { question: "Donne le nom du DROM qui est une île volcanique dans l'océan Atlantique.", answer: "Martinique", type: "text" },
        { question: "Donne le nom du DROM situé dans l'océan Pacifique.", answer: "Polynésie française", type: "text" },
        
        // Questions textuelles classiques - Massifs montagneux
        { question: "Quel est le plus grand massif montagneux de France ?", answer: "Les Alpes", type: "massif" },
        { question: "Dans quel massif se trouve le Mont Blanc ?", answer: "Les Alpes", type: "massif" },
        { question: "Quel massif montagneux sépare la France de l'Espagne ?", answer: "Les Pyrénées", type: "massif" },
        { question: "Dans quel massif se trouve le Ballon d'Alsace ?", answer: "Les Vosges", type: "massif" },
        { question: "Quel est le point culminant du Massif Central ?", answer: "Le Puy de Sancy", type: "massif" },
        
        // Questions textuelles classiques - Villes et régions
        { question: "Dans quelle région se trouve la ville de Lille ?", answer: "Hauts-de-France", type: "ville" },
        { question: "Dans quelle région se trouve la ville de Marseille ?", answer: "Provence-Alpes-Côte d'Azur", type: "ville" },
        { question: "Dans quelle région se trouve la ville de Nantes ?", answer: "Pays de la Loire", type: "ville" },
        { question: "Quel est le chef-lieu de la région Nouvelle-Aquitaine ?", answer: "Bordeaux", type: "ville" },
        { question: "Quel est le chef-lieu de la région Auvergne-Rhône-Alpes ?", answer: "Lyon", type: "ville" },
        { question: "Cite une région française frontalière avec l'Allemagne.", answer: "Grand Est", type: "text" },
        { question: "Cite une région française frontalière avec l'Espagne.", answer: "Occitanie", type: "text" },
        { question: "Cite une région française qui a un littoral sur la Méditerranée.", answer: "Provence-Alpes-Côte d'Azur", type: "text" },
        { question: "Cite une région française qui a un littoral sur l'océan Atlantique.", answer: "Nouvelle-Aquitaine", type: "text" },
        
        // Questions textuelles classiques - Métropoles
        { question: "Quelle est la plus grande métropole de France ?", answer: "Paris", type: "ville" },
        { question: "Quelle est la deuxième métropole de France par la population ?", answer: "Marseille", type: "ville" },
        { question: "Quelle est la troisième métropole de France ?", answer: "Lyon", type: "ville" },
        { question: "Quelle est la quatrième métropole de France ?", answer: "Toulouse", type: "ville" },
        { question: "Quelle est la cinquième métropole de France ?", answer: "Nice", type: "ville" },
        { question: "Quelle est la sixième métropole de France ?", answer: "Nantes", type: "ville" },
        { question: "Quelle est la septième métropole de France ?", answer: "Montpellier", type: "ville" },
        { question: "Quelle est la huitième métropole de France ?", answer: "Strasbourg", type: "ville" },
        { question: "Quelle est la neuvième métropole de France ?", answer: "Bordeaux", type: "ville" },
        { question: "Quelle est la dixième métropole de France ?", answer: "Lille", type: "ville" }
    ],
    
    emc: [
        { question: "Devise de la République Française", answer: "Liberté, Égalité, Fraternité", type: "text" },
        { question: "Valeur fondamentale de la laïcité", answer: "Respect de toutes les croyances", type: "text" },
        { question: "Droit d'expression reconnu par", answer: "Déclaration des Droits de l'Homme et du Citoyen (1789)", type: "text" },
        { question: "Date de l'abolition de l'esclavage en France", answer: "1848", type: "text" }
    ],
    
    francais: [
        { question: "Auteur de 'Le Petit Prince'", answer: "Antoine de Saint-Exupéry", type: "text" },
        { question: "Auteur de 'Les Misérables'", answer: "Victor Hugo", type: "text" },
        { question: "Auteur de 'L'Étranger'", answer: "Albert Camus", type: "text" },
        { question: "Auteur de 'Germinal'", answer: "Émile Zola", type: "text" },
        { question: "Définition d'une métaphore", answer: "Comparaison sans outil de comparaison", type: "text" },
        { question: "Définition d'une hyperbole", answer: "Exagération", type: "text" },
        { question: "Définition d'une anaphore", answer: "Répétition d'un mot ou groupe de mots en début de phrase", type: "text" },
        { question: "Définition d'une personnification", answer: "Attribuer des caractéristiques humaines à un objet ou animal", type: "text" },
        { question: "Définition d'une ellipse", answer: "Omission volontaire d'un ou plusieurs mots", type: "text" },
        { question: "Définition d'une allitération", answer: "Répétition d'un même son consonne", type: "text" },
        { question: "Définition d'une assonance", answer: "Répétition d'un même son voyelle", type: "text" },
        { question: "Qu'est-ce qu'un champ lexical ?", answer: "Ensemble de mots liés à un même thème", type: "text" },
        { question: "Qu'est-ce qu'une proposition subordonnée relative ?", answer: "Proposition introduite par un pronom relatif", type: "text" },
        { question: "Qu'est-ce qu'une proposition subordonnée conjonctive ?", answer: "Proposition introduite par une conjonction de subordination", type: "text" },
        { question: "Quel est le mode du verbe dans 'Il faut que tu viennes' ?", answer: "Subjonctif", type: "text" },
        { question: "Quel est le temps du verbe dans 'J'avais mangé' ?", answer: "Plus-que-parfait", type: "text" },
        { question: "Quel est le temps du verbe dans 'Je mangeais' ?", answer: "Imparfait", type: "text" },
        { question: "Quel est le temps du verbe dans 'Nous aurons fini' ?", answer: "Futur antérieur", type: "text" },
        { question: "Quel est le temps du verbe dans 'Vous eûtes parlé' ?", answer: "Passé antérieur", type: "text" },
        { question: "Quel est le mode du verbe dans 'Mangeons !' ?", answer: "Impératif", type: "text" }
    ],
    
    maths_facile: [
        { question: "Combien font 7 + 5 ?", answer: "12", type: "text" },
        { question: "Combien font 9 × 3 ?", answer: "27", type: "text" },
        { question: "Combien font 15 − 4 ?", answer: "11", type: "text" },
        { question: "Combien font 36 ÷ 6 ?", answer: "6", type: "text" },
        { question: "Combien font 2² ?", answer: "4", type: "text" },
        { question: "Résultat de 10% de 200 ?", answer: "20", type: "text" },
        { question: "Combien font 5 × 5 ?", answer: "25", type: "text" },
        { question: "Combien font 100 ÷ 10 ?", answer: "10", type: "text" },
        { question: "Combien font 3 + 8 ?", answer: "11", type: "text" },
        { question: "Quelle est la moitié de 50 ?", answer: "25", type: "text" },
        { question: "Combien font 4 × 6 ?", answer: "24", type: "text" },
        { question: "Combien font 81 ÷ 9 ?", answer: "9", type: "text" },
        { question: "Quelle est la racine carrée de 25 ?", answer: "5", type: "text" },
        { question: "Combien font 12 + 13 ?", answer: "25", type: "text" },
        { question: "Quel est le tiers de 90 ?", answer: "30", type: "text" },
        { question: "Combien font 0 × 56 ?", answer: "0", type: "text" },
        { question: "Quel est l'inverse de 4 ?", answer: "0.25", type: "text" },
        { question: "Combien font 8 + 12 ?", answer: "20", type: "text" },
        { question: "Combien font 7 × 7 ?", answer: "49", type: "text" },
        { question: "Combien font 64 ÷ 8 ?", answer: "8", type: "text" }
    ],
    
    maths_difficile: [
        { question: "Quelle est la valeur de π arrondie à 2 décimales ?", answer: "3.14", type: "text" },
        { question: "Résous l'équation : 2x + 3 = 11", answer: "4", type: "text" },
        { question: "Combien font 5³ ?", answer: "125", type: "text" },
        { question: "Résous l'inéquation : x > 7", answer: "x > 7", type: "text" },
        { question: "Combien font √144 ?", answer: "12", type: "text" },
        { question: "Résous : 3x = 15", answer: "5", type: "text" },
        { question: "Quelle est la dérivée de x² ?", answer: "2x", type: "text" },
        { question: "Combien vaut sin(90°) ?", answer: "1", type: "text" },
        { question: "Résous l'équation : x² = 49", answer: "7", type: "text" },
        { question: "Combien vaut 7 × (2 + 3) ?", answer: "35", type: "text" },
        { question: "Résous l'équation : x/2 = 6", answer: "12", type: "text" },
        { question: "Combien vaut cos(0°) ?", answer: "1", type: "text" },
        { question: "Résous : 4x - 8 = 0", answer: "2", type: "text" },
        { question: "Combien vaut √169 ?", answer: "13", type: "text" },
        { question: "Calcule l'aire d'un carré de côté 5", answer: "25", type: "text" },
        { question: "Résous : 7x + 2 = 16", answer: "2", type: "text" },
        { question: "Combien vaut 2⁴ ?", answer: "16", type: "text" },
        { question: "Donne la formule de l'aire d'un disque", answer: "πr²", type: "text" },
        { question: "Combien vaut ln(e) ?", answer: "1", type: "text" },
        { question: "Résous l'équation : 9x = 81", answer: "9", type: "text" }
    ]
};

// Noms des matières pour l'affichage
const subjectNames = {
    histoire: "Histoire",
    geo: "Géographie",
    emc: "EMC",
    francais: "Français",
    maths_facile: "Mathématiques (Facile)",
    maths_difficile: "Mathématiques (Difficile)"
};

// Temps par question selon la matière
const timePerQuestion = {
    histoire: 10,
    geo: 10,
    emc: 10,
    francais: 10,
    maths_facile: 10,
    maths_difficile: 20
};
