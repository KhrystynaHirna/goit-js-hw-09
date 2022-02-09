import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// delayInput = document.querySelector('delay');
// stepInput = document.querySelector('step');
// amountInput = document.querySelector('amount');
// button = document.querySelector('.form button');
const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
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


