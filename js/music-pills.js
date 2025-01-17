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

//Load more cuando CLICK .Music-button
var wraper = document.querySelectorAll(".Music-grid");
var musicBtn = document.querySelector(".Music-button");
var currentImg = 1;

musicBtn.addEventListener("click", function () {
  for (var i = currentImg; i < currentImg + 1; i++) {
    if (wraper[i]) {
      wraper[i].style.display = "grid";
    }
  }
  currentImg += 1;
  if (currentImg >= wraper.length) {
    musicBtn.style.display = `none`;
  }
});

//Efecto de scroll con InterjectionObserver
const MusicNoticia = document.querySelectorAll(`.Music-noticia`);
console.log(MusicNoticia);

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

MusicNoticia.forEach((_, i) => {
  observer.observe(MusicNoticia[i]);
});

window.addEventListener("scroll", () => {
  let { scrollY, innerHeight } = window;
  let { offsetTop } = MusicNoticia;

  let puntoActivacion = scrollY >= offsetTop - innerHeight / 1.3;
  let operacion = scrollY - (offsetTop - innerHeight / 1.3);

  requestAnimationFrame(() => {
    if (puntoActivacion) {
      MusicNoticia.style.transform = `translateY(${operacion / 2}px)`;
    }
  });
});
