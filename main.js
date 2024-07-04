const hamMenu = document.querySelector('.hamburger-menu');
const navUL = document.querySelector('.nav');
const logo = document.querySelector('.logo');

hamMenu.addEventListener('click',() => {
    console.log('toggle-menu');
    hamMenu.classList.toggle('active');
    navUL.classList.toggle('show');
    if (hamMenu.classList.contains('active')) {
        logo.src = 'images/logo-bookmark-white.svg';
        logo.style.zIndex = '40';
    } else {
        logo.src = 'images/logo-bookmark.svg';
        logo.style.zIndex = '0';
    }
    
    
});