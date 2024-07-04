const hamMenu = document.querySelector('.hamburger-menu');
const navUL = document.querySelector('.nav');

hamMenu.addEventListener('click',() => {
    console.log('toggle-menu');
    hamMenu.classList.toggle('active');
    navUL.classList.toggle('show');
    
    
});