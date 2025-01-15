'use strict'

//Cuando hago CLICK en .Button, .Nav TOGGLE de .isActive
const button = document.querySelector(`.Header-button`)
const nav = document.querySelector(`.Header-nav`)

button.addEventListener(`click` , ()=>{
    nav.classList.toggle(`IsActive`)
})

//Lightbox con suscripción a Newsletter R&R
const BtnList = document.querySelectorAll(`.Header-btn`)
const lightbox = document.querySelector(`.Lightbox`)
const LightboxForm = document.querySelector(`.Lightbox-newsletter`)
const lightboxCerrar = document.querySelector(`.Lightbox-cerrar`)


const closeBtnHandler = ()=> lightbox.classList.remove(`Active`)
const BtnListHandler = index =>{
    lightbox.classList.add(`Active`)
    LightboxForm.src = ImgList[index].src
}

BtnList.forEach( ( eachImg , index )=>{
    BtnList[index].addEventListener(`pointerdown` , ()=>{
        BtnListHandler(index)
    })
})

lightboxCerrar.addEventListener(`pointerdown` ,  closeBtnHandler )
