const getSidebar = document.querySelector(".nav-sidebar");
const getSidebarUL = document.querySelector(".nav-sidebar ul");
const getSidebarContent = document.querySelectorAll(".nav-sidebar p");
const navbutton = document.querySelector(".btn-toggle-nav");

let toggleNavStatus = false;

navbutton.addEventListener("click", function () {
  if (toggleNavStatus === false) {
    getSidebarUL.style.visibility = "visible";
    getSidebar.style.width = "272px";
    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebarUL.style.visibility = "hidden";
    getSidebar.style.width = "50px";
    toggleNavStatus = false;
  }
});

const antiqueWhite = document.querySelector(".AW");
const aquamarine = document.querySelector(".A");
const lawnGreen = document.querySelector(".LG");
const navajoWhite = document.querySelector(".NW");
const pink = document.querySelector(".P");
const h1 = document.querySelector("h1");

antiqueWhite.addEventListener("click", function () {
  document.body.removeAttribute("class");
  document.body.classList.toggle("awbackground");
  h1.innerHTML = ("");
  h1.innerHTML += ("The background color is... Antique White"); 
});

aquamarine.addEventListener("click", function () {
  document.body.removeAttribute("class");
  document.body.classList.toggle("abackground");
  h1.innerHTML = ("");
  h1.innerHTML += ("The background color is...  Aquamarine"); 
});

lawnGreen.addEventListener("click", function () {
  document.body.removeAttribute("class");
  document.body.classList.toggle("lgbackground");
  h1.innerHTML = ("");
  h1.innerHTML += ("The background color is...  Lawn Green"); 
});

navajoWhite.addEventListener("click", function () {
  document.body.removeAttribute("class");
  document.body.classList.toggle("nwbackground");
  h1.innerHTML = ("");
  h1.innerHTML += ("The background color is...  Navajo White"); 
});

pink.addEventListener("click", function () {
  document.body.removeAttribute("class");
  document.body.classList.toggle("pbackground");
  h1.innerHTML = ("");
  h1.innerHTML += ("The background color is...  Pink"); 
});



/*
// Code om aan te geven welke kleur er nu actief is (Niet af)

const h1 = document.querySelector("h1");

const body = document.querySelector("body");
let backgroundIsAW = body.classList.contains("awbackground");
let backgroundIsA = body.classList.contains("abackground");
let backgroundIsLG = body.classList.contains("lgwbackground");
let backgroundIsNW = body.classList.contains("nwbackground");
let backgroundIsP = body.classList.contains("pbackground");

if (backgroundIsAW === true){ 
    h1.innerHTML += (" Antique White"); 
}; 

if (backgroundIsA === true){ 
    h1.innerHTML += (" Aquamarine"); 
}; 
*/
