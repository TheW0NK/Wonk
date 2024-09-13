// List of allowed IP addresses
const allowedIPs = ['10.104.102.138', '136.228.205.245']; // Replace with actual IP addresses

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

// Check if the user's IP address is in the whitelist
getUserIP(function(ip) {
    if (allowedIPs.includes(ip)) {
        // Remove blur and display content if IP address is allowed
        document.getElementById('content').classList.remove('blur');
    } else {
        alert(`Error 403: Forbidden. Your IP address is ${ip}. Please contact the administrator to get whitelisted.`);
        while (true) {
            alert('Error 403: Forbidden.');
        }
    }
});

// Panic key combination (Ctrl + Shift + X)
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'X') {
        document.getElementById('content').classList.add('blur');
        while (true) {
            alert('Access denied.');
        }
    }
});