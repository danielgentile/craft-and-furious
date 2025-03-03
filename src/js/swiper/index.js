/* eslint-disable comma-dangle */
/*
--------------------------------------------------------------------------
  SWIPER PARAMS
--------------------------------------------------------------------------
*/

// import Swiper
import Swiper from "swiper"
// import Swiper Modules - only the ones you will use
import { A11y, Navigation, Autoplay, Thumbs, Scrollbar } from "swiper/modules"
// import Core Swiper core SCSS
import "swiper/css"
import "swiper/css/scrollbar"

// Init the modules
Swiper.use([A11y, Navigation, Autoplay, Thumbs, Scrollbar])

/**
--------------------------------------------------------------------------
   General images slider
--------------------------------------------------------------------------
*/
const generalSwiper = new Swiper(".swiper-general", {
   slidesPerView: 1,
   spaceBetween: 30,
   autoHeight: false,
   grabCursor: true,
   watchOverflow: true,
   breakpoints: {
      576: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },
   },
   navigation: {
      nextEl: ".swiper-general-next",
      prevEl: ".swiper-general-prev"
   }
})

/**
--------------------------------------------------------------------------
   Icons slider
--------------------------------------------------------------------------
*/
const iconsSwiper = new Swiper(".swiper-icons", {
   slidesPerView: 1.33,
   spaceBetween: 30,
   autoHeight: false,
   grabCursor: true,
   watchOverflow: true,
   breakpoints: {
      1024: {
         slidesPerView: 3,
      },
   },
   navigation: {
      nextEl: ".swiper-icons-next",
      prevEl: ".swiper-icons-prev"
   }
})