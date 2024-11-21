// Función para registrar al usuario
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const surnames = document.getElementById('surnames').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.querySelector('.options').value;

    if (email && password) {
        let users = JSON.parse(localStorage.getItem('users')) || [];

        const userExists = users.some(user => user.email === email);
        if (userExists) {
            document.getElementById('registerMessage').textContent = 'El usuario ya está registrado.';
            document.getElementById('registerMessage').style.color = 'red';
            return;
        }

        users.push({ username, surnames, email, password, gender });
        localStorage.setItem('users', JSON.stringify(users));

        document.getElementById('registerMessage').textContent = '¡Cuenta creada con éxito!';
        document.getElementById('registerMessage').style.color = 'green';

        setTimeout(() => {
            window.location.href = 'index.html'; // Redirige a la página de inicio de sesión
        }, 2000);
    }
});