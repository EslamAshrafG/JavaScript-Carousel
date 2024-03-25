"use strict";
const btns = document.querySelectorAll("[data-carousel-btn]");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const offset = btn.dataset.carouselBtn === "next" ? 1 : -1;
    const slides = btn
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndx = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndx < 0) newIndx = slides.children.length - 1;
    if (newIndx >= slides.children.length) newIndx = 0;
    slides.children[newIndx].dataset.active = true;
    delete activeSlide.dataset.active;
    console.log(slides);
  });
});
