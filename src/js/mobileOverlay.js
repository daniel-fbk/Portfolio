const mobileOverlay = document.querySelector(".nav-overlay");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  mobileOverlay.classList.toggle("active");
});
