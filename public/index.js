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

// accordion
function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
 
    // SVG for Minus icon
    const minusSVG = `
      <img class="w-7" src="./asset/image/minus.svg" alt="">
    `;
 
    // SVG for Plus icon
    const plusSVG = `
       <img class="w-7" src="./asset/image/plus.svg" alt="">
    `;
 
    // Toggle the content's max-height for smooth opening and closing
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = '0';
      icon.innerHTML = plusSVG;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.innerHTML = minusSVG;
    }
  }

  window.addEventListener('scroll', reveal);

  function reveal(){
    var reveals = document.querySelectorAll('.reveal');
  
    for(var i = 0; i < reveals.length; i++){
  
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;
  
      if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
      }
      else{
        reveals[i].classList.remove('active');
      }
    }
  }

  window.addEventListener('scroll', rotate);

  function rotate(){
    var rotates = document.querySelectorAll('.rotate-right');
  
    for(var i = 0; i < rotates.length; i++){
  
      var windowheight = window.innerHeight;
      var rotatetop = rotates[i].getBoundingClientRect().top;
      var rotatepoint = 150;
  
      if(rotatetop < windowheight - rotatepoint){
        rotates[i].classList.add('actv');
      }
      else{
        rotates[i].classList.remove('actv');
      }
    }
  }


  window.addEventListener('scroll', rotateLeft);

  function rotateLeft(){
    var rotatesLeft = document.querySelectorAll('.rotate-left');
  
    for(var i = 0; i < rotatesLeft.length; i++){
  
      var windowheight = window.innerHeight;
      var rotatetop = rotatesLeft[i].getBoundingClientRect().top;
      var rotatepoint = 150;
  
      if(rotatetop < windowheight - rotatepoint){
        rotatesLeft[i].classList.add('actvi');
      }
      else{
        rotatesLeft[i].classList.remove('actvi');
      }
    }
  }