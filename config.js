// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBOlKmWYXhwFAWWxb2BRikTCVQfkyiLXL8",
    authDomain: "revsionbrevetsitemomort02.firebaseapp.com",
    projectId: "revsionbrevetsitemomort02",
    storageBucket: "revsionbrevetsitemomort02.appspot.com",
    messagingSenderId: "712732038363",
    appId: "1:712732038363:web:d62b1748b5685cc8f9a8fe",
    measurementId: "G-YG4TED9VC1"
};

// Initialisation Firebase
firebase.initializeApp(firebaseConfig);

// Références Firebase
const auth = firebase.auth();
const db = firebase.firestore();

// Variables globales
let currentUser = null;
