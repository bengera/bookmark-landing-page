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
