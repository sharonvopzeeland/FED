// JavaScript Document
var hamburgerMenu = document.querySelector("nav button");

var colorChangeInput = document.querySelector("header input");

var contactFormKnop = document.querySelector("main section:nth-of-type(8) button");


hamburgerMenu.addEventListener("click", toggleHamburger);

function toggleHamburger() {
  var navEl = document.querySelector("nav");
  navEl.classList.toggle("toonHamburger");
}



colorChangeInput.addEventListener('change', switchenVanModus);

function switchenVanModus() {
  if( colorChangeInput.checked ) {
    document.documentElement.classList.add("darkMode");
  } else {
    document.documentElement.classList.remove("darkMode");
  }
}

contactFormKnop.addEventListener("click", toggleContact);

function toggleContact() {
  var formEl = document.querySelector("main section:nth-of-type(8) form");
  formEl.classList.toggle("toonContact");
}