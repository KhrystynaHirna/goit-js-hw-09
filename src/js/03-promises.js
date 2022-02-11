import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function createPromise(position, delayStep) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      return resolve({ position, delayStep });
    } else {
      return reject({ position, delayStep });
    }
  });
};
  
function onFormSubmit(evt) {
   
  evt.preventDefault();
  const formData = evt.currentTarget;

  let delay = Number(formData.delay.value);
  let step = Number(formData.step.value);
  let amount = Number(formData.amount.value);
  let position = 0;
  
  for (let i = 1; i <= amount; i += 1) {
    let delayStep = delay += step;

  createPromise(position, delay, delayStep)
    .then(({ position, delayStep }) => {
    
      setTimeout(() => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delayStep}ms`);
      }, delayStep);
  })
    .catch(({ position, delayStep }) => {
      setTimeout(() => {
        Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delayStep}ms`);
      }, delayStep);
  })
  }
};

  






