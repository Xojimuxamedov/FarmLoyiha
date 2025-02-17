let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;

function showSlide(index) {
  const carouselInner = document.querySelector(".carousel-inner");
  const offset = -index * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Avtomatik aylanish
setInterval(nextSlide, 5000);

const contactBox = document.getElementById("contactBox");
const contactButton = document.querySelector(".contact-short-link");
const closeButton = document.querySelector(".close-btn");

// "Bog‘lanish" tugmasini bosganda ochish
contactButton.addEventListener("click", () => {
  contactBox.style.display = "block";
  document.body.style.overflow = "hidden";
});

// Ekranning istalgan joyiga bosganda yopish
window.addEventListener("click", (e) => {
  if (e.target === contactBox) {
    contactBox.style.display = "none";
    document.body.style.overflow = "";
  }
});
