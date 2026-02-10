# Quiz Brevet - Application de Révision

## 📚 Description

Quiz Brevet est une application web moderne et interactive pour réviser le Brevet des collèges. Elle propose des quiz chronométrés dans 5 matières principales avec un système de suivi des performances et de classement mondial.

## ✨ Fonctionnalités

### 🎯 Quiz Interactifs
- **5 Matières** : Histoire, Géographie, EMC, Français, Mathématiques
- **2 Niveaux en Maths** : Facile (10s) et Difficile (20s)
- **10 questions** par quiz sélectionnées aléatoirement
- **Timer visuel** avec cercle de progression
- **Correction immédiate** avec tableau récapitulatif

### 👤 Système d'Authentification
- Inscription et connexion sécurisées via Firebase
- Profil utilisateur personnalisé
- Sauvegarde automatique des progrès

### 🏆 Suivi des Performances
- **Meilleurs temps** enregistrés par matière
- **Classement mondial** avec top 10 par matière
- **Médailles** pour les 3 premiers (🥇🥈🥉)
- **Notifications de records** personnels

### 🎵 Expérience Utilisateur
- Design moderne avec thème sombre
- Animations fluides et effets visuels
- Musique d'ambiance (3 choix)
- Interface responsive (mobile, tablette, desktop)

## 🚀 Installation et Déploiement

### Option 1 : Déploiement sur Firebase Hosting

1. **Installer Firebase CLI** :
```bash
npm install -g firebase-tools
```

2. **Se connecter à Firebase** :
```bash
firebase login
```

3. **Initialiser le projet** :
```bash
cd quiz-brevet
firebase init hosting
```
- Sélectionnez votre projet : `revsionbrevetsitemomort02`
- Public directory : `.` (dossier actuel)
- Configure as single-page app : `No`
- Set up automatic builds : `No`

4. **Déployer** :
```bash
firebase deploy
```

### Option 2 : Hébergement Local

1. **Avec Python** :
```bash
cd quiz-brevet
python -m http.server 8000
```
Puis ouvrez : http://localhost:8000

2. **Avec Node.js** :
```bash
npx http-server
```

3. **Avec VS Code** :
- Installez l'extension "Live Server"
- Clic droit sur `index.html` → "Open with Live Server"

## 📁 Structure des Fichiers

```
quiz-brevet/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── config.js           # Configuration Firebase
├── quiz-data.js        # Questions des quiz
├── app.js              # Logique de l'application
└── README.md           # Ce fichier
```

## 🔧 Configuration

### Firebase
La configuration Firebase est déjà incluse dans `config.js`. Si vous souhaitez utiliser votre propre projet Firebase :

1. Créez un projet sur [Firebase Console](https://console.firebase.google.com)
2. Activez **Authentication** (Email/Password)
3. Activez **Firestore Database**
4. Remplacez les valeurs dans `config.js` avec vos propres clés

### Base de Données Firestore

Structure de la collection `users` :
```javascript
{
  pseudo: "string",
  email: "string",
  bestTimes: {
    histoire: number,
    geo: number,
    emc: number,
    francais: number,
    maths_facile: number,
    maths_difficile: number
  },
  createdAt: timestamp
}
```

## 🎮 Utilisation

1. **Inscription/Connexion** : Créez un compte ou connectez-vous
2. **Choisir une matière** : Cliquez sur la carte de votre choix
3. **Répondre aux questions** : 10 secondes (ou 20 en maths difficile) par question
4. **Voir vos résultats** : Score, temps total, correction détaillée
5. **Consulter le classement** : Comparez-vous aux autres utilisateurs

## 🎨 Personnalisation

### Couleurs
Modifiez les variables CSS dans `styles.css` :
```css
:root {
    --color-primary: #2563eb;
    --color-secondary: #8b5cf6;
    /* ... */
}
```

### Questions
Ajoutez ou modifiez les questions dans `quiz-data.js` :
```javascript
const quizData = {
    histoire: [
        { question: "Votre question", answer: "Réponse" },
        // ...
    ]
}
```

### Temps par Question
Modifiez dans `quiz-data.js` :
```javascript
const timePerQuestion = {
    histoire: 10,  // secondes
    // ...
}
```

## 📱 Responsive Design

L'application s'adapte automatiquement à tous les écrans :
- 📱 Mobile (< 768px)
- 💻 Tablette (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🔒 Sécurité

- Authentification Firebase sécurisée
- Validation côté client et serveur
- Mots de passe hashés automatiquement
- Règles de sécurité Firestore recommandées

### Règles Firestore à configurer :
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 🐛 Dépannage

### Problème d'authentification
- Vérifiez que l'authentification Email/Password est activée dans Firebase
- Vérifiez votre configuration Firebase dans `config.js`

### Les quiz ne se chargent pas
- Ouvrez la console du navigateur (F12)
- Vérifiez les erreurs JavaScript
- Assurez-vous que tous les fichiers sont bien chargés

### Le classement est vide
- Complétez au moins un quiz pour apparaître dans le classement
- Vérifiez que Firestore est bien configuré

## 📈 Améliorations Futures

- [ ] Mode hors ligne avec Service Worker
- [ ] Statistiques détaillées (graphiques de progression)
- [ ] Badges et réalisations
- [ ] Mode révision (sans timer)
- [ ] Import/export de questions
- [ ] Quiz personnalisés
- [ ] Mode multijoueur en temps réel

## 📝 Licence

Ce projet est libre d'utilisation pour un usage éducatif.

## 👨‍💻 Support

Pour toute question ou problème, vérifiez :
1. La console du navigateur pour les erreurs
2. La configuration Firebase
3. Que tous les fichiers sont bien présents

## 🎓 Contenu Pédagogique

Le contenu des quiz couvre le programme du Brevet :
- **Histoire** : Dates clés (1914-1991)
- **Géographie** : Régions, DROM, métropoles françaises
- **EMC** : Valeurs républicaines, laïcité
- **Français** : Auteurs, figures de style, grammaire
- **Mathématiques** : Calculs, équations, géométrie

---

**Bon courage pour vos révisions ! 🎓✨**
