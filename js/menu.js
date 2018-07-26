var open = document.querySelector(".page-header__button");
var menu = document.querySelector(".page-header__main-nav");
var close = document.querySelector(".main-nav__close");

open.addEventListener("click", function (evt){
  evt.preventDefault();
  menu.classList.add("menu-show");
});

close.addEventListener("click", function(evt){
  evt.preventDefault();
  menu.classList.remove("menu-show");
});
