var popupFailure = document.querySelector(".popup--failure");
var popupSuccess = document.querySelector(".popup--success");
var form = document.querySelector("form");

var firstName = form.querySelector("[name=first-name]");
var surname = form.querySelector("[name=family]");
var tel = form.querySelector("[name=tel]");
var email = form.querySelector("[name=email]");
var formButton = form.querySelector("button");

var closeFailure = popupFailure.querySelector(".popup__button-close--failure");
var closeSuccess = popupSuccess.querySelector(".popup__button-close--success");

formButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (!firstName.value || !surname.value || !tel.value || !email.value) {
    popupFailure.classList.add("popup--failure-show");
    closeFailure.focus();
  } else {
    popupSuccess.classList.add("popup--success-show");
    closeSuccess.focus();
  }
});

closeFailure.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFailure.classList.remove("popup--failure-show");
});

closeSuccess.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSuccess.classList.remove("popup--success-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupFailure.classList.contains("modal--failure-show")) {
      popupFailure.classList.remove("modal--failure-show");
    }

    if (popupSuccess.classList.contains("modal--success-show")) {
      popupSuccess.classList.remove("modal--success-show");
    }
  }
});
