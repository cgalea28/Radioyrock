'use strict'

//Cuando hago CLICK en .Button, .Nav TOGGLE de .isActive
const button = document.querySelector(`.Header-button`)
const nav = document.querySelector(`.Header-nav`)

button.addEventListener(`click` , ()=>{
    nav.classList.toggle(`IsActive`)
})

let foto = 0

//Cuando click en .Next
//foto++
//.Carrousel-container le STYLE transform: translateX()

const next = document.querySelector(`.Next`)
const prev = document.querySelector(`.Prev`)
const carrouselContainer = document.querySelector(`.Carrousel-container`)
const carrouselImgs = document.querySelectorAll(`.Carrousel-cont`)
const punto = document.querySelectorAll(`.Carrousel-point`)
const isActive = document.querySelector(`.isActive`)

let anchoImg = 100 / carrouselImgs.length

carrouselContainer.style.width = `calc(100% * ${carrouselImgs.length})`
carrouselContainer.style.gridTemplateColumns = `repeat(${carrouselImgs.length} , 1fr)`

//Punto Next
next.addEventListener(`click`, () => {
    foto++
    if (foto >= carrouselImgs.length) {
        foto = 0
    }

    carrouselContainer.style.transform = `translateX(-${anchoImg * foto}%)`

    carrouselImgs.forEach((_, i) => {
        carrouselImgs[i].classList.remove(`isVisible`)
    })
    carrouselImgs[foto].classList.add(`isVisible`)
    punto.forEach((_, i) => {
        punto[i].classList.remove(`isActive`)
    })
    punto[foto].classList.add(`isActive`)
})

//Botón Prev
prev.addEventListener(`click`, () => {
    if (foto <= 0) {
        foto = carrouselImgs.length
    }
    foto--

    carrouselContainer.style.transform = `translateX(-${anchoImg * foto}%)`

    carrouselImgs.forEach((_, i) => {
        carrouselImgs[i].classList.remove(`isVisible`)
    })
    carrouselImgs[foto].classList.add(`isVisible`)
    punto.forEach((_, i) => {
        punto[i].classList.remove(`isActive`)
    })
    punto[foto].classList.add(`isActive`)
})



//Cuando CLICK en Punto
//Saber la posición de ese punto
punto.forEach((_, i) => {
    punto[i].addEventListener(`click`, () => {
        let posicion = i
        let operacion = posicion * -25

        carrouselContainer.style.transform = `translateX(${operacion}%)`
    })
})

//AÑADIR la clase isActive al punto que hemos hecho click
punto.forEach(( _ , i )=>{
    punto[i].addEventListener( `click` , ()=>{

          foto = i
          carrouselImgs.forEach(( _ , i )=>{
            carrouselImgs[i].classList.remove(`isVisible`)
        })
        carrouselImgs[foto].classList.add(`isVisible`)
        
        punto.forEach(( _ , i )=>{
            punto[i].classList.remove(`isActive`)
        })
        punto[foto].classList.add(`isActive`)

    })
})

//Lightbox con suscripción a Newsletter R&R
const BtnList = document.querySelectorAll(`.Header-btn`)
const lightbox = document.querySelector(`.Lightbox`)
const LightboxForm = document.querySelector(`.Lightbox-newsletter`)
const lightboxCerrar = document.querySelector(`.Lightbox-cerrar`)


const closeBtnHandler = ()=> lightbox.classList.remove(`Active`)
const BtnListHandler = index =>{
    lightbox.classList.add(`Active`)
    LightboxForm.src = BtnList[index].src
}

BtnList.forEach( ( eachBtn , index )=>{
    BtnList[index].addEventListener(`pointerdown` , ()=>{
        BtnListHandler(index)
    })
})

lightboxCerrar.addEventListener(`pointerdown` ,  closeBtnHandler )