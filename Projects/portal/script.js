// List of allowed IP addresses
const allowedIPs = ['104.225.188.213', '136.228.205.245']; // Replace with actual IP addresses

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
            disableUserInteraction();
        });
}

// Function to disable scrolling and clicking
function disableUserInteraction() {
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';
}

// Function to display the access denied message