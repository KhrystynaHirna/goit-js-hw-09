
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyColor = document.querySelector('body');
const PROMPT_DELAY = 1000;
let timerId = null;

// let promptCounter = 0;


btnStart.addEventListener('click', onBtnStartClick);
btnStart.addEventListener('click', onBtnStopClick);
btnStart.disabled = false;
btnStop.disabled = true;

function onBtnStartClick() {
    bodyColor.style.backgroundColor = getRandomHexColor();
    console.log(bodyColor);
    btnStop.disabled;
    timerId = setInterval(() => {
        onBtnStartClick();
        // promptCounter += 1;
    }, PROMPT_DELAY);
    };


function onBtnStopClick() {
    // if (btnStart.disabled) {
    // clearInterval(timerId);
    // console.log(`Interval with id ${timerId} has stopped!`);
    // }  
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}