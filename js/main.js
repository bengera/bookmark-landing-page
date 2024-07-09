const hamMenu = document.querySelector('.hamburger-menu');
const navDropDown = document.querySelector('.nav__drop-down');
const logo = document.querySelector('.logo');
const overlay = document.querySelector('.overlay');

hamMenu.addEventListener('click',() => {
    console.log('toggle-menu');
    hamMenu.classList.toggle('active');
    navDropDown.classList.toggle('show');
    overlay.classList.toggle('show');
    logo.classList.toggle('white');
    // if (hamMenu.classList.contains('active')) {
    //     logo.src = 'images/logo-bookmark-white.svg';
    //     logo.style.zIndex = '40';
    // } else {
    //     logo.src = 'images/logo-bookmark.svg';
    //     logo.style.zIndex = '0';
    // }
    
    
});