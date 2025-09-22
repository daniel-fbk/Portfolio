import "./style.css";

const mobileOverlay = document.querySelector(".nav-overlay");
const hamburger = document.querySelector(".hamburger");
const hamburgerTop = document.querySelector(".line.top");
const hamburgerMiddle = document.querySelector(".line.middle");
const hamburgerbottom = document.querySelector(".line.bottom");
const mobileLinks = document.querySelectorAll(".nav-overlay a");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  mobileOverlay.classList.remove("preload");
  mobileOverlay.classList.toggle("open");
  body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileOverlay.classList.remove("open");
  });
});
