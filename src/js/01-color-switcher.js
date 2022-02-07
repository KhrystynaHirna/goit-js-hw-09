
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyColor = document.querySelector('body');


btnStart.addEventListener('click', onBtnStartClick);
btnStart.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
    bodyColor.style.backgroundColor = getRandomHexColor();
    console.log(bodyColor);
  
    const timerId = setInterval(() => {
    //    return onBtnStartClick(bodyColor);
        // return bodyColor.Math.random();
        onBtnStartClick(bodyColor);
    }, 1000);
    };


function onBtnStopClick() {

}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}