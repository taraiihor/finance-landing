'use strict';

const emailInput = document.querySelector('#email');
const worningStyle = document.getElementById('error');
const form = document.querySelector('form');
const button = document.querySelector('.form__button');

emailInput.isValid = () => isValidEmail(emailInput.value);

function isValidEmail(email) {
  const regExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(email).toLowerCase());
}

let isFormValid = false;

function validateInputs() {
  isFormValid = true;
  worningStyle.classList.add('visually-hidden');
  if (!emailInput.isValid()) {
    worningStyle.classList.remove('visually-hidden');
    isFormValid = false;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  validateInputs();
  if (isFormValid) {
    form.requestSubmit();
  }
}
button.addEventListener('click', handleSubmit);
