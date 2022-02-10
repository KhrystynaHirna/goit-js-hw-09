import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnStart = document.querySelector('button[data-start]');
const daysEl = document.querySelector('.field [data-days]');
const hoursEl = document.querySelector('.field [data-hours]');
const minutesEl = document.querySelector('.field [data-minutes]');
const secondsEl = document.querySelector('.field [data-seconds]');

const PROMPT_DELAY = 1000;
const currentDate = Date.now();
btnStart.disabled = 'disable';

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
    }          
};
const fp = flatpickr("#datetime-picker", options);

class Timer {
    constructor({ onTick }) {
        this.timerId = null;
        this.isActive = false;
        this.onTick = onTick;
    };
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        const selectedTime = fp.selectedDates[0].getTime();
    
        this.timerId = setInterval(() => {
            const deltaTime = selectedTime - currentDate;
        
            if (deltaTime < 0) {
                clearInterval(this.timerId);
                return;
            }
            const timeComponents = this.convertMs(deltaTime);
            this.onTick(timeComponents);
        }, PROMPT_DELAY);
        btnStart.disabled = 'disable';
    };
    convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = this.addLeadingZero(Math.floor(ms / day));
        const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
        const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
        const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

        return { days, hours, minutes, seconds };
    };
    addLeadingZero(value) {
        return String(value).padStart(2, '0');
    };
};
const timer = new Timer ({
onTick: timerUpdateInterface,
});
function timerUpdateInterface ({ days, hours, minutes, seconds }) {
    daysEl.textContent = `${days}`;
    hoursEl.textContent = `${hours}`;
    minutesEl.textContent = `${minutes}`;
    secondsEl.textContent = `${seconds}`;
};

btnStart.addEventListener('click', timer.start.bind(timer));