import "./style.css";

const mobileOverlay = document.querySelector(".nav-overlay");
const hamburger = document.querySelector(".hamburger");
const hamburgerTop = document.querySelector(".line.top");
const hamburgerMiddle = document.querySelector(".line.middle");
const hamburgerbottom = document.querySelector(".line.bottom");

hamburger.addEventListener("click", () => {
  mobileOverlay.classList.remove("preload");
  mobileOverlay.classList.toggle("open");
});
