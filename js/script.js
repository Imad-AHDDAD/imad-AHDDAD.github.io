window.addEventListener("DOMContentLoaded",function(){
   let year = document.getElementById("year");
   year.innerHTML = new Date().getFullYear();

   let menu = document.querySelector('#menuIcon');
   let nav = document.querySelector('.navbar');

   menu.addEventListener("click",()=>{
   menu.classList.toggle('fa-xmark');
   nav.classList.toggle('on');
});
})



