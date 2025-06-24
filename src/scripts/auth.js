const db = firebase.firestore();

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
            document.getElementById('login-error').innerText = error.message;
        });
}

function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(error => {
            document.getElementById('login-error').innerText = error.message;
        });
}

function logout() {
    firebase.auth().signOut();
}

function openMenu() {
    document.getElementById('side-menu').classList.add('open');
    document.getElementById('menu-overlay').classList.add('open');
}
function closeMenu() {
    document.getElementById('side-menu').classList.remove('open');
    document.getElementById('menu-overlay').classList.remove('open');
}

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        document.querySelector('.container').style.display = '';
        document.getElementById('login-card').style.display = 'none';
        document.getElementById('logout-btn').style.display = '';
    } else {
        document.querySelector('.container').style.display = 'none';
        document.getElementById('login-card').style.display = '';
        document.getElementById('logout-btn').style.display = 'none';
    }
});




