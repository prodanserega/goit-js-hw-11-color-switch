import './sass/main.scss';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
  
let colorInterval;
  
const startButton = document.querySelector('button[data-action="start"]');
const stopButton = document.querySelector('button[data-action="stop"]');

startButton.addEventListener("click", startBtnClick);
stopButton.addEventListener("click", stopBtnClick);


function startBtnClick() {
    if (colorInterval) {
        return;
    }
    startButton.disabled = true;
    colorInterval = setInterval(setColor,1000);
};

function stopBtnClick() {
    startButton.disabled = false;
    clearInterval(colorInterval);
    colorInterval = '';
};

function setColor() {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };