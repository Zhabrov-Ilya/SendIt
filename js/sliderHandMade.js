"use strict";

let slides = document.querySelectorAll(".slide");

let next = document.querySelector("#next");
let prev = document.querySelector("#prev");

let tabletWidth = window.matchMedia("(max-width: 767px)");
let sizeFlag = 0;


//Стартовое положение слайдов
function slidesPosition(tabletWidth) {
  let slideWidth = window.screen.width - 126; //126px это высчитанные стрелки и отступы
  if (tabletWidth.matches) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.left = i * slideWidth + "px";
    }
  }
}
slidesPosition(tabletWidth);

//Подгонка ширины слайдера при изменении размеров экрана
window.onresize = toWindowWidth;

function toWindowWidth() {
  let activeEl = document.querySelector(".active");
  let firstSlide = slides[0];
  activeEl.classList.toggle("active"); //убираем
  firstSlide.classList.toggle("active"); //добавляем

  slidesPosition(tabletWidth);

  sliderScrollHeight();

  console.log(tabletWidth);
};



//FIXME: подгонка высоты после смены ориентации телефона хромает
//Подгонка высоты слайдера для избежания вылезания контента за его пределы
function sliderScrollHeight() {
  if (tabletWidth.matches) {
    let slider = document.querySelector(".slider");
    let activeEl = document.querySelector(".active");
    slider.style.minHeight = activeEl.offsetHeight + "px";
  }
}
sliderScrollHeight();

//Переключение на предыдущий слайд
function prevClick() {
  let slideWidth = document.querySelector(".slide").offsetWidth;
  let activeEl = document.querySelector(".active");
  if (activeEl.previousElementSibling) {
    for (let i = 0; i < slides.length; i++) {
      let left = slides[i].style.left;
      left = left.substring(0, left.indexOf("px"));
      slides[i].style.left = Number(left) + slideWidth + "px";
    }
    activeEl.classList.toggle("active"); //убираем
    activeEl.previousElementSibling.classList.toggle("active"); //добавляем
  }
  sliderScrollHeight();
}
prev.onclick = prevClick;

//Переключение на следующий слайд
function nextClick() {
  let slideWidth = document.querySelector(".slide").offsetWidth;
  let activeEl = document.querySelector(".active");
  if (activeEl.nextElementSibling) {
    for (let i = 0; i < slides.length; i++) {
      let left = slides[i].style.left;
      left = left.substring(0, left.indexOf("px"));
      slides[i].style.left = Number(left) - slideWidth + "px";
    }
    activeEl.classList.toggle("active"); //убираем
    activeEl.nextElementSibling.classList.toggle("active"); //добавляем
  }
  sliderScrollHeight();
}
next.onclick = nextClick;

//TODO: сделать кнопки неактивными когда слайды заканчиваются
//TODO: несколько слайдеров на одной странице
//TODO: попробовать сделать зацикливание
//FIXME: при изменении экрана подгоняет слайдер используя transition
//FIXME: едет высота и позиция слайдов при вращении телефона
//FIXME: в ТЕЛЕФОНЕ почему-то смещение слайдов