let menu = document.querySelector('menu-btn');
let navbar = document.querySelector('.navbar');
  
menu.onclick = () =>{
    menu.classList.add('fa-times');
    navbar.classList.add('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}