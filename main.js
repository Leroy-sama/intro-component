const form = document.querySelector('form');
const firstNombre = document.querySelector('.first');
const lastNombre = document.querySelector('.last');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('form selected');
    console.log(firstNombre.value);
    console.log(lastNombre.value);
    console.log(email.value);
    console.log(password.value);
})