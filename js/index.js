"use strict";

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

//En cada hoja de JS he definido const y var al principio de cada apartado comentado, tanto para mi organización como para que se vea claro, porque todo junto en una lista, sin comentar, me parecía demasiado desorganizado