import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delay = document.querySelector('delay');
const step =  document.querySelector('step');
const amount = document.querySelector('amount');
const button = document.querySelector('.form button');
const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);

const formData = {
  delay: delay.number,
  step: step.number,
  amount: amount.number,  
};

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.number;
    console.log(formData);
};


function onFormInput() {

};

function onFormSubmit() {

}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });


