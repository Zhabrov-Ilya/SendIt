'use strict';

let acc = document.querySelectorAll(".accordion-box");

acc.forEach(element => {
  element.addEventListener('click', accordion)
});

function accordion(event) {
  event.preventDefault();
  //вращаемый треугольник
  let toggle = this.querySelector('.toggle');
  //раскрываемый блок
  let panel = this.querySelector('.panel');
  if (panel.style.maxHeight) {
    toggle.style.transform = 'rotate(0deg)';
    panel.style.maxHeight = null;
  } else {
    toggle.style.transform = 'rotate(180deg)';
    panel.style.maxHeight = panel.scrollHeight + "px";
  } 
}
