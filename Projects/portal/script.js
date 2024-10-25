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
        <p id="loginError" style="color: red; display: none;">Invalid username or password. Please try again or contact the site admin (aledeaux@gmail.com) for assistance.</p>
    `;
    document.body.appendChild(loginDiv);
    console.log('Login form displayed');
    disableInspectTool();
    disableScrolling();

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
        { username: 'RSNOW', password: 'R_snow12?'     },
        { username: 'OB', password: 'N!co2020'         },
    ];

    const isValid = validCredentials.some(account => account.username === username && account.password === password);

    if (isValid) {
        console.log('Login successful, allowing access...');
        document.getElementById('content').classList.remove('blur');
        document.querySelector('.center-message').remove();
        enableScrolling();
        startTracking();
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

// Function to disable scrolling
function disableScrolling() {
    document.body.style.overflow = 'hidden';
}

// Function to enable scrolling
function enableScrolling() {
    document.body.style.overflow = 'auto';
}

// Function to start tracking for suspicious programs
function startTracking() {
    setInterval(checkForSuspiciousPrograms, 30000); // Check every 30 seconds
}

// Function to check for suspicious programs
function checkForSuspiciousPrograms() {
    const { exec } = require('child_process');
    exec('ps aux', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing ps: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error in ps output: ${stderr}`);
            return;
        }

        const processes = stdout.split('\n');
        const suspiciousPrograms = ['lanschool', 'remote'];
        const detectedPrograms = processes.filter(process => 
            suspiciousPrograms.some(program => process.includes(program))
        );

        if (detectedPrograms.length > 0) {
            displaySecurityBreach(detectedPrograms.join(', '));
        }
    });
}

// Function to display security breach message
function displaySecurityBreach(program) {
    const breachDiv = document.createElement('div');
    breachDiv.className = 'center-message';
    breachDiv.style.color = 'red';
    breachDiv.innerHTML = `
        <h1>482: Security breach</h1>
        <p>A suspicious program was detected that could potentially breach the security of this website.</p>
        <p>Suspicious program listed: ${program}</p>
    `;
    document.body.appendChild(breachDiv);
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