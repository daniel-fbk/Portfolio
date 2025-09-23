const navOverlay = document.querySelector(".nav-overlay");
const hamburger = document.querySelector(".hamburger");
const hamburgerTop = document.querySelector(".line.top");
const hamburgerMiddle = document.querySelector(".line.middle");
const hamburgerbottom = document.querySelector(".line.bottom");
const mobileLinks = document.querySelectorAll(".nav-overlay a");
const body = document.querySelector("body");

export const mobileOverlay = () => {
  hamburger.addEventListener("click", () => {
    navOverlay.classList.remove("preload");
    navOverlay.classList.toggle("open");
    body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navOverlay.classList.remove("open");
    });
  });
};
