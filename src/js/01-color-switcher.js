
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

const PROMPT_DELAY = 1000;
const btnDisable = false;
let timerId = null;

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onBtnStartClick() {
    if (btnStart.disabled === btnDisable) {
        btnStart.disabled = true;
}
    timerId = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, PROMPT_DELAY);
}
function onBtnStopClick() {
    clearInterval(timerId);
    btnStart.disabled = btnDisable;
}
