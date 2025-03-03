// import your elements here
import "./accordions/accordions.js"
import "./menu/menu.js"

/**
--------------------------------------------------------------------------
   Chunks > Swiper
--------------------------------------------------------------------------
*/
// dynamic import for Swiper, instances js is like a proxy
if (document.querySelector(".swiper-container")) {
   import(
      /* webpackChunkName: "swiper" */
      "./swiper/index.js")
}
