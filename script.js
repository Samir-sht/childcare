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
