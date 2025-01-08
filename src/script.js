const kompetisiButtonDesktop = document.getElementById("kompetisi-btn-desktop");
const kompetisiDropdownDesktop = document.getElementById(
  "kompetisi-dropdown-desktop"
);

//Start Function Rev (Putri)
const dropdownArrowDesktop = document.getElementById("dropdown-arrow-desktop");
const arrowTextDesktop = document.getElementById("arrow-text-desktop");

const kompetisiButtonMobile = document.getElementById("kompetisi-btn-mobile");
const kompetisiDropdownMobile = document.getElementById(
  "kompetisi-dropdown-mobile"
);
const dropdownArrowMobile = document.getElementById("dropdown-arrow-mobile");
const arrowTextMobile = document.getElementById("arrow-text-mobile");

const hamburgerButton = document.getElementById("hamburger-btn");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");
const mobileMenu = document.getElementById("mobile-menu");

// Handle dropdown toggle
const toggleDropdown = (dropdown, arrowText, arrow) => {
  dropdown.classList.toggle("hidden");

  // Toggle arrow text and rotation
  if (dropdown.classList.contains("hidden")) {
    arrowText.textContent = "v";
  } else {
    arrowText.textContent = "^";
  }
  arrow.classList.toggle("rotate-30");
};

// Desktop Dropdown (Navbar)
kompetisiButtonDesktop.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleDropdown(
    kompetisiDropdownDesktop,
    arrowTextDesktop,
    dropdownArrowDesktop
  );
});

// Mobile Dropdown (Navbar)
kompetisiButtonMobile.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleDropdown(kompetisiDropdownMobile, arrowTextMobile, dropdownArrowMobile);
});

// Close dropdown
document.addEventListener("click", (event) => {
  const isClickInsideDesktop =
    kompetisiButtonDesktop.contains(event.target) ||
    kompetisiDropdownDesktop.contains(event.target);

  const isClickInsideMobile =
    kompetisiButtonMobile.contains(event.target) ||
    kompetisiDropdownMobile.contains(event.target);

  if (!isClickInsideDesktop) {
    kompetisiDropdownDesktop.classList.add("hidden");
    arrowTextDesktop.textContent = "v"; // Reset arrow text
    dropdownArrowDesktop.classList.remove("rotate-180");
  }

  if (!isClickInsideMobile) {
    kompetisiDropdownMobile.classList.add("hidden");
    arrowTextMobile.textContent = "v"; // Reset arrow text
    dropdownArrowMobile.classList.remove("rotate-180");
  }
});

// Toggle mobile menu for hamburger button
hamburgerButton.addEventListener("click", (event) => {
  event.stopPropagation();
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("-translate-x-full");

  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Close mobile menu
document.addEventListener("click", (event) => {
  const isClickInsideMobileMenu =
    hamburgerButton.contains(event.target) || mobileMenu.contains(event.target);

  if (!isClickInsideMobileMenu) {
    mobileMenu.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});
//End Function Rev (Putri)
