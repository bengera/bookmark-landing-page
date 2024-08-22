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

    if (hamMenu.classList.contains('active')) {
        
        document.body.setAttribute("style", "position:fixed");
        hamMenu.setAttribute('aria-label', 'Close navigation menu');

    } else {
        
        document.body.setAttribute("style", "position:static");
        hamMenu.setAttribute('aria-label', 'Open navigation menu');
    }
 
});

// RESIZING FOR MENU

function resetMenu() {
    console.log('reset menu');
    overlay.classList.remove('show');
    navDropDown.classList.remove('show');
    logo.classList.remove('white');
    hamMenu.classList.remove('active');
}

(function () {
    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;

    function displayWindowSize() {
        let myWidth = window.innerWidth;

        if (myWidth >= 650) {
            if (hamMenu.classList.contains('active')) {
                resetMenu();
            }
            
        } 

    }
})();
