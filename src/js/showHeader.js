const header = document.querySelector("header");
const footer = document.querySelector("footer");

export const showHeader = () => {
  window.addEventListener("scroll", () => {
    const footerRect = footer.getBoundingClientRect();

    if (window.scrollY === 0) {
      header.classList.add("top");
    } else {
      header.classList.remove("top");
    }

    if (footerRect.top <= window.innerHeight / 5) {
      header.classList.add("bottom");
    } else {
      header.classList.remove("bottom");
    }
  });
};
