
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

const PROMPT_DELAY = 1000;
const btnDisable = false;
let timerId = null;

btnStart.addEventListener('click', onBtnStartClick);
btnStart.addEventListener('click', onBtnStopClick);

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


// const start = document.querySelector('[data-start]');
// const stop = document.querySelector('[data-stop]');
// // console.log(start);
// // console.log(stop);
// let timerId = null;
// const btnDisable = false;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// start.addEventListener('click', changeBgColor);

// stop.addEventListener('click', stopChangingBgColor);

// function changeBgColor() {
//   if (start.disabled === btnDisable) {
//     start.disabled = true;
//   }
//   timerId = setInterval(() => {
//     document.body.style.background = getRandomHexColor();
//   }, 1000);
// }

// function stopChangingBgColor() {
//   clearInterval(timerId);
//   start.disabled = btnDisable;
// }