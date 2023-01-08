// window.addEventListener("load", function () {
//   const slider = document.querySelector(".header-slider");
//   const sliderMain = document.querySelector(".slider-main");
//   const sliderItems = document.querySelectorAll(".slider-item");
//   const nextBtn = document.querySelector(".slider-next");
//   const prevBtn = document.querySelector(".slider-prev");
//   const dotItem = document.querySelectorAll(".slider-dot-item");
//   const sliderItemWidth = sliderItems[0].offsetWidth;
//   const sliderLength = sliderItems.length;
//   let positionX = 0;
//   let index = 0;
//   nextBtn.addEventListener("click", function () {
//     handleChangeSlide(1);
//   });
//   prevBtn.addEventListener("click", function () {
//     handleChangeSlide(-1);
//   });
//   function handleChangeSlide(dir) {
//     if (dir === 1) {
//       if (index >= sliderLength - 1) {
//         index = sliderLength - 1;
//         return;
//       }
//       positionX = positionX - sliderItemWidth;
//       sliderMain.style = `transform: translateX(${positionX}px)`;
//       index++;
//     } else if (dir === -1) {
//       if (index <= 0) {
//         index = 0;
//         return;
//       }
//       positionX = positionX + sliderItemWidth;
//       sliderMain.style = `transform: translateX(${positionX}px)`;
//       index--;
//     }
//   }
// });
window.addEventListener("load", function () {
  const toggle = document.querySelector(".toogle");
  const menu = document.querySelector(".header-menu");
  toggle && toggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    menu && menu.classList.add("is-show");
  }
  document.addEventListener("click", handleClickOutside);
  function handleClickOutside(e) {
    if (
      e.target.matches(".toogle") ||
      e.target.matches(".header-menu, .header-menu *")
    )
      return;
    menu && menu.classList.remove("is-show");
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   const menuOpen = document.querySelector(".toogle");
//   const menu = document.querySelector(".header-menu");
//   if (!menuOpen || !menu) return;
//   menuOpen.addEventListener("click", function () {
//     menu.classList.add("active");
//   });
// document.addEventListener("click", function (e) {
//   if (!menu.contains(e.target) && !e.target.matches(".toogle")) {
//     menu.classList.remove("active");
//   }
// });
// });
