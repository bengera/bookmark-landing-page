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
  
    
    
});

// FEATURES CONTENT SWTICH
const tabs = document.querySelectorAll('.features__button');
const image = document.getElementById('features-img');
const heading = document.getElementById('features-heading');
const text = document.getElementById('features-text');
const button = document.getElementById('features-button');

// Add event listener to each link
tabs.forEach((tab) => {
    tab.addEventListener('click',(e) =>{
        console.log('tab clicked');
        tabs.forEach((tab) => {
            tab.classList.remove('active');
            
        })
        tab.classList.add('active');
        // tab.style.borderWidth = 'initial';
       
    })
})

// If target is equal to particular text - fill content
