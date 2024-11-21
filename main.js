// Función para iniciar sesión
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === loginEmail && user.password === loginPassword);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));

        document.getElementById('loginMessage').innerHTML = 'Inicio de sesión exitoso.<br>Redirigiendo...';
        document.getElementById('loginMessage').style.color = 'green';

        setTimeout(() => {
            window.location.href = '/CSS/Intermedio/paginaWeb/index.html'; // Redirige a la página de inicio
        }, 2000);
    } else {
        document.getElementById('loginMessage').innerHTML = 'Correo o contraseña incorrectos.<br>Por favor, intenta nuevamente.';
        document.getElementById('loginMessage').style.color = 'red';
    }
});