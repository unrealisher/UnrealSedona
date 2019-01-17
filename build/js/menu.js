var nav = document.querySelector(".general-nav");

var menu = nav.querySelector(".general-nav__site-list");
var menuButton = nav.querySelector(".general-nav__toggle");

menu.classList.remove("general-nav__site-list--no-js");
menu.classList.add("general-nav__site-list--closed");

menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (!menu.classList.contains("general-nav__site-list--opened")) {
    menu.classList.add("general-nav__site-list--opened");
    menu.classList.remove("general-nav__site-list--closed");
    menuButton.classList.add("general-nav__toggle--closed");
    menuButton.classList.remove("general-nav__toggle--opened");
  } else {
    menu.classList.remove("general-nav__site-list--opened");
    menu.classList.add("general-nav__site-list--closed");
    menuButton.classList.remove("general-nav__toggle--closed");
    menuButton.classList.add("general-nav__toggle--opened");
  }
});
