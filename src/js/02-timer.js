import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputData = document.querySelector('input#datetime-picker');
const btnStart = document.querySelector('[data-start]');

inputData.addEventListener('input', onInputDataInput);
btnStart.addEventListener('click', onBtnStartClick);



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
// const currentTime = this.defaultDate;
const flatp = flatpickr(inputData, { options });
console.log(flatp);


        
function onInputDataInput() {
    // if (currentTime.value <= fp.value) {
    //     window.alert("Please choose a date in the future");
    // }
    options.onClose.bind(options);
    // onClose(selectedDates);
    // console.log();
}


function onBtnStartClick() {
    
}
