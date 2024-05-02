
let menuIcon = document.getElementById("menu-icon");
let navMenu  = document.querySelector(".nav-menu");

menuIcon.addEventListener("click", function(){
 navMenu.classList.toggle("open-menu");

 if(navMenu.classList.contains("open-menu")){
   menuIcon.className = "fa-solid fa-x";
 }else{
   menuIcon.className = "fa-solid fa-bars";
 }


});