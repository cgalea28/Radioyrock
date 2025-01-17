"use strict";

//Cuando hago CLICK en .Button, .Nav TOGGLE de .isActive
const button = document.querySelector(`.Header-button`);
const nav = document.querySelector(`.Header-nav`);

button.addEventListener(`click`, () => {
  nav.classList.toggle(`IsActive`);
});

//Lightbox con suscripción a Newsletter R&R
const BtnList = document.querySelectorAll(`.Header-btn`);
const lightbox = document.querySelector(`.Lightbox`);
const LightboxForm = document.querySelector(`.Lightbox-newsletter`);
const lightboxCerrar = document.querySelector(`.Lightbox-cerrar`);

const closeBtnHandler = () => lightbox.classList.remove(`Active`);
const BtnListHandler = (index) => {
  lightbox.classList.add(`Active`);
  LightboxForm.src = BtnList[index].src;
};

BtnList.forEach((eachBtn, index) => {
  BtnList[index].addEventListener(`pointerdown`, () => {
    BtnListHandler(index);
  });
});

lightboxCerrar.addEventListener(`pointerdown`, closeBtnHandler);

//Efecto de scroll con InterjectionObserver
const Parrafo = document.querySelectorAll(`.Parrafo-p`);
console.log(Parrafo);

let options = {
  threshold: [0, 1],
};

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    let { isIntersecting, target } = entry;

    if (isIntersecting) {
      target.classList.add(`IsVisible`);
    }
  });
}, options);

Parrafo.forEach((_, i) => {
  observer.observe(Parrafo[i]);
});

window.addEventListener("scroll", () => {
  let { scrollY, innerHeight } = window;
  let { offsetTop } = Parrafo;

  let puntoActivacion = scrollY >= offsetTop - innerHeight / 1.3;
  let operacion = scrollY - (offsetTop - innerHeight / 1.3);

  requestAnimationFrame(() => {
    if (puntoActivacion) {
      Parrafo.style.transform = `translateY(${operacion / 2}px)`;
    }
  });
});
