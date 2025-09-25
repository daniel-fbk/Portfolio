import "./style.css";
import { mobileOverlay } from "./js/mobileOverlay.js";
import { showHeader } from "./js/showHeader.js";

// document.addEventListener("DOMContentLoaded", () => {
//   mobileOverlay();
// });

window.onload = () => {
  document.querySelector("body").classList.remove("preload");
};

mobileOverlay();
showHeader();
