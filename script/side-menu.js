const menu = document.querySelector(".menu");
const menuIcon = document.getElementById("menu-icon-path");
const sidebar = document.querySelector(".side-menu");

const pathMenu =
  "M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z";
const pathClose =
  "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z";

function showSidebar() {
  sidebar.style.display = "flex";
}

function hideSidebar() {
  sidebar.style.display = "none";
}

menu.onclick = function () {
  menu.classList.toggle("menu-open");
  if (menu.classList.contains("menu-open")) {
    menuIcon.setAttribute("d", pathClose);
    showSidebar();
  } else {
    menuIcon.setAttribute("d", pathMenu);
    hideSidebar();
  }
};
