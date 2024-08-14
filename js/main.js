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
// const button = document.getElementById('features-button');
const shape = document.getElementById('shape');

import tab1 from '../images/illustration-features-tab-1.svg';
import tab2 from '../images/illustration-features-tab-2.svg';
import tab3 from '../images/illustration-features-tab-3.svg';
// Add event listener to each link
tabs.forEach((tab) => {
    tab.addEventListener('click',(e) =>{
        console.log('tab clicked');
        tabs.forEach((tab) => {
            tab.classList.remove('active');
            
        })
        tab.classList.add('active');
        // console.log(e.target.innerText);
        switch(e.target.innerText){
            case "Simple Bookmarking":
                heading.innerText = "Bookmark in one click";
                text.innerText = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
                image.src = tab1;
                shape.style.height = "200px";
                                
                break;

                case "Speedy Searching":
                    heading.innerText = "Intelligent search";
                    text.innerText = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
                    image.src = tab2;
                    shape.style.height = "240px";
                                        
                    break;

                    case "Easy Sharing":
                        heading.innerText = "Share your bookmarks";
                        text.innerText = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
                        image.src = tab3;
                        shape.style.height = "250px";
                        
                        break;    

                default:
                    console.log("No match found");
        }
       
    })
})

// CHECK EMAIL FIELD

const form = document.getElementById('form');
const emailField = document.querySelector('.email-field');
const buttonContact = document.querySelector('.contact-btn');
const iconError = document.querySelector('.i-error');
const errorDropdown = document.querySelector('.error-dropdown');

form.addEventListener('click', (e) => {
    if (e.target === buttonContact) { 
        e.preventDefault();
        console.log('check input');
        checkEmail();
    }
});

function checkEmail() {
    const email = document.getElementById('email');
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setErrorFor(email, 'Whoops, make sure it’s an email');
    } else if  (!isEmail(emailValue)) 
        setErrorFor(email, 'Whoops, make sure it’s an email');
     else  {
     emailField.value = '';
     emailField.classList.remove('active');
     iconError.classList.remove('active');
     errorDropdown.classList.remove('active');
     buttonContact.classList.remove('active');
    }

}


function setErrorFor() {
          
     emailField.classList.add('active');
     iconError.classList.add('active');
     errorDropdown.classList.add('active');
     buttonContact.classList.add('active');
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


