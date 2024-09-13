// List of allowed IP addresses
const allowedIPs = ['104.225.188.213', '136.228.205.185']; // Replace with actual IP addresses

// Function to encode Unicode to base64
function encodeUnicode(str) {
    return btoa(unescape(encodeURIComponent(str)));
}

// Function to decode base64 to Unicode
function decodeUnicode(str) {
    return decodeURIComponent(escape(atob(str)));
}

// Function to get the user's IP address
function getUserIP(callback) {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => callback(data.ip))
        .catch(error => {
            console.error('Error fetching IP address:', error);
            alert('Unable to verify IP address. Access denied.');
        });
}

// Function to display the access denied message
function displayAccessDeniedMessage(ip) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'center-message';
    messageDiv.innerHTML = `<h1>Error 403: Forbidden</h1><p>Your IP address is ${ip}. Please contact the site administrator (aledeaux@gmail.com) to get whitelisted.</p>`;
    document.body.appendChild(messageDiv);
    console.log('Access denied message displayed');
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
        getUserIP(function(ip) {
            displayAccessDeniedMessage(ip);
        });
    }
});