// popup.js

document.addEventListener('DOMContentLoaded', function() {
    const popupButton = document.getElementById('popupButton');
    const popupContent = document.getElementById('popupContent');

    popupButton.addEventListener('click', function() {
        popupContent.classList.toggle('show');
    });
});

// Add any additional functions as needed for handling popup interactions.
