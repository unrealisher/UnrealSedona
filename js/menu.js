var open = document.querySelector(".page-header__button");
var menu = document.querySelector(".main-nav");
var close = document.querySelector(".main-nav__close");

menu.classList.remove("main-nav--opened");

open.addEventListener("click", function (evt){
  evt.preventDefault();
  if (menu.classList.contains("main-nav--opened")) {
    menu.classList.remove("main-nav--opened");
  } else {
    menu.classList.add("main-nav--opened");
  }
});

close.addEventListener("click", function(evt){
  evt.preventDefault();
  menu.classList.remove("main-nav--opened");
});
