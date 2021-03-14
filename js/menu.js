// Constantes y eventos que hacen funcionar el menu 
// classlist.add y classList.remove agregamos y removemos una clase de manera dinamica
const logo = document.querySelector('.nav__icon');
const menu = document.querySelector(".mostrar");
const close = document.querySelector(".mostrar__iconClose");

logo.addEventListener("click", ()=>{
    menu.classList.add("menu-active");
});
close.addEventListener("click", ()=>{
    menu.classList.remove("menu-active");
});
// ...................................................
// ...................................................