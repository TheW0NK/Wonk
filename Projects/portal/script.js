// List of allowed MAC addresses
const allowedMACs = ['00:1A:2B:3C:4D:5E', '00:1A:2B:3C:4D:5F', '00:1A:2B:3C:4D:60']; // Replace with actual MAC addresses

// Function to get the user's MAC address
function getUserMAC(callback) {
    // Placeholder for actual MAC address retrieval logic
    // This typically requires server-side support or a local application
    fetch('/get-mac-address') // Example endpoint
        .then(response => response.json())
        .then(data => callback(data.mac))
        .catch(error => {
            console.error('Error fetching MAC address:', error);
            displayErrorMessage('Unable to verify MAC address. Access denied.');
            disableUserInteraction();
        });
}

// Function to display an error message in a div
function displayErrorMessage(message, mac = '') {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `${message} ${mac ? `Your MAC address: ${mac}` : ''}`;
    messageDiv.style.display = 'block';
}

// Check if the user's MAC address is in the whitelist
getUserMAC(function(mac) {
    console.log(`User MAC: ${mac}`);
    if (allowedMACs.includes(mac)) {
        console.log('MAC is whitelisted, allowing access...');
        // Remove blur and display content if MAC address is allowed
        document.getElementById('content').classList.remove('blur');
    } else {
        displayErrorMessage('Error 403: Access Denied.', mac);
        disableUserInteraction();
    }
});

function disableUserInteraction() {
    document.getElementById('content').classList.add('blur');
}