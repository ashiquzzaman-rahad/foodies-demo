const menu = document.querySelector(".hambergur-menu");
const navlist = document.querySelector(".navbar");

function openMenu() {
  if (navlist.style.display === "none") {    
    navlist.style.display = "block";
  } else{
    navlist.style.display = "none";
  }
}