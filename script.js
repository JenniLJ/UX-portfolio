//this is a javascript file. There will be javascript all over this thing
// Add JavaScript to handle the menu toggle behavior
const menuToggle = document.getElementById("menu-toggle");
const closeBtn = document.querySelector(".close-btn");
const menuOpen = document.querySelector(".menu");
const contactButton = document.getElementById("contactButton");
const bottomElement = document.getElementById("contact");

menuToggle.addEventListener("change", function () {
  if (this.checked) {
    menuOpen.style.right = 0;
    closeBtn.style.display = "block"; // Show the close button when menu is expanded
  } else {
    menuOpen.style.right = "-200px";
    closeBtn.style.display = "none"; // Hide the close button when menu is collapsed
  }
});

contactButton.addEventListener("click", () => {
  bottomElement.scrollIntoView({ behavior: "smooth" });
});