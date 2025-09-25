const navOverlay = document.querySelector(".nav-overlay");
const hamburger = document.querySelector(".hamburger");
const mobileLinks = document.querySelectorAll(".nav-overlay a");
const body = document.querySelector("body");

const hamburgerIcon = () => {
  hamburger.classList.toggle("open");
};

export const mobileOverlay = () => {
  hamburger.addEventListener("click", () => {
    navOverlay.classList.toggle("open");
    body.style.overflow = body.style.overflow === "hidden" ? "auto" : "hidden";
    hamburgerIcon();
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navOverlay.classList.remove("open");
      body.style.overflow =
        body.style.overflow === "hidden" ? "auto" : "hidden";
      hamburger.classList.toggle("open");
    });
  });
};
