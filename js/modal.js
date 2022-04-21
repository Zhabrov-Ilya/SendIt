'use strict';

const modal = document.querySelector('.modal');
const blurContainer = document.querySelector('#blur-container');
const closeBtn = document.querySelector('.modal__cross');

closeBtn.addEventListener('click', function () {
  modal.classList.remove('animate__bounceIn');
  modal.classList.add('animate__bounceOut');
  blurContainer.classList.add('no-blur');
  modal.addEventListener('animationend', () => {
    modal.classList.add('hidden');
    blurContainer.classList.remove('blur', 'disabled');
  });
});

window.addEventListener('load', () => {
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  if (!mediaQuery.matches) {
    return;
  }
  setTimeout(function() {
    modal.classList.remove('hidden', 'animate__bounceOut');
    modal.classList.add('animate__animated', 'animate__bounceIn');
    blurContainer.classList.remove('no-blur');
    blurContainer.classList.add('blur', 'disabled');
  }, 2000);
});