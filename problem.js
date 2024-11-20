document.addEventListener("DOMContentLoaded", function() {
    // Get the dropdown link and content
    const dropdownLink = document.getElementById("typesLink");
    const dropdownContent = document.querySelector(".dropdown-content");

    // Toggle the dropdown content on click
    dropdownLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    // Close the dropdown when clicking outside
    document.addEventListener("click", function(event) {
        if (!dropdownLink.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = "none";
        }
    });
});