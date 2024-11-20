// script.js

// Get the modal
var modal = document.getElementById("popupModal");

// Get the button that opens the modal
var btn = document.getElementById("typesLink");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal
btn.onclick = function(event) {
    event.preventDefault();  // Prevent default link behavior
    modal.style.display = "flex";  // Show modal
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";  // Hide modal
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target = modal) {
        modal.style.display = "none";  // Hide modal
    }
}
