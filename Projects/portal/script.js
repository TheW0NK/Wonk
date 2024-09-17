// Function to display the access denied message
function displayAccessDeniedMessage(ip) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'center-message';
    messageDiv.innerHTML = `<h1>Error 403: Forbidden</h1><p>Your IP address is ${ip}. Please contact the site administrator (aledeaux@gmail.com) to get whitelisted.</p>`;
    document.body.appendChild(messageDiv);
    console.log('Access denied message displayed');
    disableInspectTool();
    disableUserInteraction();
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

// List of allowed IP addresses
const allowedIPs = ['136.228.205.195', '104.225.188.243', '136.228.205.245', '136.228.205.215', '104.225.188.228', '136.228.206.79']; // Replace with actual IP addresses

// Function to get the user's IP address
function getUserIP(callback) {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => callback(data.ip))
        .catch(error => {
            console.error('Error fetching IP address:', error);
            alert('Unable to verify IP address. Access denied.');
            disableUserInteraction();
        });
}

// Check if the user's IP address is in the whitelist
getUserIP(function(ip) {
    console.log(`User IP: ${ip}`);
    if (allowedIPs.includes(ip)) {
        console.log('IP is whitelisted, allowing access...');
        // Remove blur and display content if IP address is allowed
        document.getElementById('content').classList.remove('blur');
    } else {
        console.log('IP is not whitelisted! Retaining div element...');
        displayAccessDeniedMessage(ip);
    }
});

// Panic key combination (Ctrl + Shift + X)
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'X') {
        document.getElementById('content').classList.add('blur');
    }
});