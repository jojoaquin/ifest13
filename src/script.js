const kompetisiButton = document.getElementById("kompetisi-btn");
const kompetisiDropdown = document.getElementById("kompetisi-dropdown");

kompetisiButton.addEventListener("click", (event) => {
  event.stopPropagation();
  kompetisiDropdown.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
  const isClickInside =
    kompetisiButton.contains(event.target) ||
    kompetisiDropdown.contains(event.target);
  if (!isClickInside) {
    kompetisiDropdown.classList.add("hidden");
  }
});

document.getElementById("hamburger-btn").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");

  menu.classList.toggle("hidden"); // Toggle visibility
  menu.classList.toggle("-translate-x-full"); // Slide effect for the menu

  // Toggle the icons
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});
