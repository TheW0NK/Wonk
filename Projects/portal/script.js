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
        <p id="loginError" style="color: red; display: none;">Invalid username or password. Please try again or contact the site admin for assistance.</p>
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
async function validateLogin(username, password) {
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            console.log('Login successful, allowing access...');
            document.getElementById('content').classList.remove('blur');
            document.querySelector('.center-message').remove();
            enableScrolling();
            startTracking();
        } else {
            console.log('Invalid login attempt');
            document.getElementById('loginError').style.display = 'block';
        }
    } catch (error) {
        console.error('Error during login:', error);
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
    setInterval(checkForSuspiciousPrograms, 10000); // Check every 30 seconds
}

// Function to check for suspicious programs
function checkForSuspiciousPrograms() {
    // This function should be implemented on the server-side
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
function displayuserblock() {
    const panicDiv = document.createElement('div');
    panicDiv.className = 'center-message';
    panicDiv.innerHTML = `
    <h1>483: Page secured by user</h1>
    <p>The end user secured the page. Please login to unlock the page.</p>
    <button id="unlockButton">Unlock</button>
    `;
    document.body.appendChild(panicDiv);

    document.getElementById('unlockButton').addEventListener('click', function() {
        location.reload();
    });
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'X') {
        document.getElementById('content').classList.add('blur');
        disableInspectTool();
        disableScrolling();
        displayuserblock();
    }
});
