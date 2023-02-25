//slider
const swiper = new Swiper(".swiper", {
  // loop: false,
  speed: 2000,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   // delay: 3000,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//sticky navbar
const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

//mobile navigation

const nav = document.querySelector("nav ul");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  nav.classList.toggle("active");
  console.log("hello");
});

//dropdown
// const mainlink = document.querySelector("nav ul li");
// const sublinks = document.querySelector("nav ul li ul");

// mainlink.addEventListener("click", function () {
//   sublinks.classList.toggle("show");
//   console.log("world");
// });
