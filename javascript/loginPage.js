document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember-me').checked;
        
        // Simple validation for demo purposes
        if (username === 'admin' && password === 'admin') {
            window.location.href = "employeeProfile.html";

            if (rememberMe) {
                alert('Remember me is checked');
            }
        } else {
            alert('Invalid username or password.');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember-me').checked;
        
        // Simple validation for demo purposes
        if (username === 'user' && password === 'password') {
            alert('Login successful!');
            if (rememberMe) {
                alert('Remember me is checked');
            }
        } else {
            alert('Invalid username or password.');
        }
    });
});
