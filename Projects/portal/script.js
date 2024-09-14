document.body.style.pointerEvents = 'none';


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