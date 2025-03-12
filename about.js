let hamburger = document.querySelector(".headerup-second-hamburgerMenu");
let nav = document.querySelector(".headerup-second-navbar")

hamburger.addEventListener("click", () => {
  nav.classList.toggle("headerup-second-navbar-active")
  hamburger.classList.toggle("active")
});
