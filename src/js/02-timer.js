import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnStart = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

const PROMPT_DELAY = 1000;
let timerId = null;
btnStart.disabled = 'disable';

btnStart.addEventListener('click', onBtnStartClick);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

        if ((selectedDates[0]) > currentDate) {
            Notiflix.Notify.success('Nice! You choose a date in the future');
            btnStart.disabled = false;
        } else {
            return Notiflix.Notify.failure('Please choose a date in the future');
        }
        return selectedDates[0];
    }          
};
const fp = flatpickr("#datetime-picker", options);
const currentDate = Date.now();
const selectedTime = fp.selectedDates[0].getTime();
const deltaTime = selectedTime - currentDate;
console.log(currentDate);
console.log(selectedTime);
console.log(deltaTime);
      
function onBtnStartClick() {
    timerId = setInterval(() => {
    convertMs(deltaTime);
    timerInterface(deltaTime);
        console.log(timerInterface);
    }, PROMPT_DELAY);
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

function timerInterface ({ days, hours, minutes, seconds }) {
    daysEl.textContent = `${days}`;
    hoursEl.textContent = `${hours}`;
    minutesEl.textContent = `${minutes}`;
    secondsEl.textContent = `${seconds}`;

    return { days, hours, minutes, seconds };
}

