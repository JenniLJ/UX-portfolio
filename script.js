//this is a javascript file. There will be javascript all over this thing
// Add JavaScript to handle the menu toggle behavior
const menuToggle = document.getElementById("menu-toggle");
const closeBtn = document.querySelector(".close-btn");

menuToggle.addEventListener("change", function () {
  if (this.checked) {
    closeBtn.style.display = "block"; // Show the close button when menu is expanded
  } else {
    closeBtn.style.display = "none"; // Hide the close button when menu is collapsed
  }
});