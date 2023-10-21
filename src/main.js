const logoContainer = document.querySelector(".slideshow-container");
const logos = document.querySelectorAll(".logo");

let currentLogoIndex = 0;

function slideLogos() {
  currentLogoIndex++;
  if (currentLogoIndex === logos.length) {
    currentLogoIndex = 0;
  }
  const offset = currentLogoIndex * -100; // Adjust the width of your logo container
  logoContainer.style.transform = `translateX(${offset}%)`;
}

setInterval(slideLogos, 3000); // Change logos every 3 seconds (adjust as needed)
