"use strict";
import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper(".swiper", {
  sliderPerView: 1,
  autoHeight: true,
  loop: true,
  spaceBetween: 20,

  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  },

  navigation: {
    nextEl: '#swiper-button-next',
    prevEl: '#swiper-button-prev',
  },
});