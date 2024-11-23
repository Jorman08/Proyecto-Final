window.onload = function () {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const logoutButton = document.getElementById('buttonLogout');
    const iniciarButton = document.getElementById('button__login-register');
    const greetingElement = document.getElementById('userGreeting');

    if (currentUser) {
        greetingElement.innerHTML = `Hola ${currentUser.username}`;
        logoutButton.style.display = 'inline-block';
    } else {
        logoutButton.style.display = 'inline-block';
    }
};

function logout() {
    localStorage.removeItem('currentUser');

    window.location.href = "index.html";
}