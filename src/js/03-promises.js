import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      return resolve({ position, delay });
    } else {
      return reject({ position, delay });
    }
  });
};
  
function onFormSubmit(evt) {
    // createPromise
  evt.preventDefault();
  const formData = evt.currentTarget.elements;

  let delay = Number(formData.delay.value);
  let step = Number(formData.step.value);
  let amount = Number(formData.amount.value);
  
  for (let position = 1; position <= amount; position += 1) {
    delay += step;

  createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
};

  






