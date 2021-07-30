'use strict';

const emailInput = document.querySelector('#email');
const worningStyle = document.getElementById('error');
const form = document.querySelector('form');

emailInput.isValid = () => isValidEmail(emailInput.value);

const isValidEmail = email => {
  const regExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(email).toLowerCase());
};

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
  if (!shouldValidate) return;

  isFormValid = true;

  worningStyle.style.opacity = 0;
  if (!emailInput.isValid()) {
    console.log('Форма не відправлена');

    worningStyle.style.opacity = 1;
    isFormValid = false;
  }
};

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  shouldValidate = true;
  validateInputs();

  if (isFormValid) {
    console.log('форма відправлена');
  }
}
