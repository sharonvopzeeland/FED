// JavaScript Document
var hamburgerMenu = document.querySelector("nav button");

hamburgerMenu.addEventListener("click", toggleHamburger);

function toggleHamburger() {
  var navEl = document.querySelector("nav");
  navEl.classList.toggle("toonHamburger");
}
