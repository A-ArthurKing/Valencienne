var navLinks = document.querySelector(".nav-links");

var buttonMenue = document.getElementById("menu");

var liensDeNavigation = document.querySelectorAll("li-nav");

function menuClick(e) {
  navLinks.classList.toggle("nav-links-hover");
  liensDeNavigation.classList.toggle.style.display = "flex";
}

buttonMenue.addEventListener("click", menuClick);
