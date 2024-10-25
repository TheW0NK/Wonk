// Function to display the login form
function displayLoginForm() {
    const loginDiv = document.createElement('div');
    loginDiv.className = 'center-message';
    loginDiv.innerHTML = `
        <h1>Login Required</h1>
        <form id="loginForm">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br>
            <button type="submit">Login</button>
        </form>
        <p id="loginError" style="color: red; display: none;">Invalid username or password. Please try again.</p>
    `;
    document.body.appendChild(loginDiv);
    console.log('Login form displayed');
    disableInspectTool();

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        validateLogin(username, password);
    });
}

// Function to validate login credentials
function validateLogin(username, password) {
    const validCredentials = [
        { username: 'aledeaux', password: '1M&&b==307' },
    ];

    const isValid = validCredentials.some(account => account.username === username && account.password === password);

    if (isValid) {
        console.log('Login successful, allowing access...');
        document.getElementById('content').classList.remove('blur');
        document.querySelector('.center-message').remove();
    } else {
        console.log('Invalid login attempt');
        document.getElementById('loginError').style.display = 'block';
    }
}

// Function to disable the inspect tool
function disableInspectTool() {
    // Disable right-click context menu
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });

    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    document.addEventListener('keydown', function(event) {
        if (event.key === 'F12' || 
            (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J')) || 
            (event.ctrlKey && event.key === 'U')) {
            event.preventDefault();
        }
    });
}

// Function to disable user interaction (clicking and scrolling)
function disableUserInteraction() {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Disable clicking
    document.body.style.pointerEvents = 'none';

    // Prevent default actions for mouse and touch events
    document.addEventListener('mousedown', function(event) {
        event.preventDefault();
    }, true);

    document.addEventListener('touchstart', function(event) {
        event.preventDefault();
    }, true);
}

// Display the login form on page load
document.addEventListener('DOMContentLoaded', function() {
    displayLoginForm();
});

// Panic key combination (Ctrl + Shift + X)
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'X') {
        document.getElementById('content').classList.add('blur');
    }
});