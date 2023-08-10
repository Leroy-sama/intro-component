const form = document.querySelector('form');
const firstNombre = document.querySelector('.first');
const lastNombre = document.querySelector('.last');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const firstError = document.querySelector('.error1');
const lastError = document.querySelector(".error2");
const emailError = document.querySelector(".error3");
const pswdError = document.querySelector(".error4");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = firstNombre.value.trim();
    const lastName = lastNombre.value.trim();
    const address = email.value.trim();
    const pswd = password.value.trim();

    const validateEmail = (address) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    if (firstName === '') {
        console.log('first name is empty');
        firstError.textContent = 'first name cannot empty';
    }   else {
        console.log ('first name is good');
    }
    
    if (lastName === "") {
      console.log("last name is empty");
      lastError.textContent = "last name cannot empty";
    } else {
      console.log("last name is good");
    }

    if (address === '') {
        console.log('email field is empty');
        emailError.textContent = "email field cannot empty";
    }   else if (!validateEmail(address)) {
        console.log('wrong email format')
        emailError.textContent = 'Looks like this is not an email';
    }   else {
        console.log('email is good');
    }

    if (pswd === '') {
        console.log('password cannot be empty');
        pswdError.textContent = "password cannot be empty";
    }   else {
        console.log('password is good');
    }
})