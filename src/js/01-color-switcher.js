const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
startButton.addEventListener('click', () => {
  eighteesMode();
});
stopButton.addEventListener('click', () => {
  boringMode();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
var discoTime = null;
function eighteesMode() {
  startButton.disabled = true;
  discoTime = setInterval(flashingLight, 100);
}

function boringMode() {
  startButton.disabled = false;
  clearInterval(discoTime);
}
function flashingLight() {
  document.body.style.backgroundColor = getRandomHexColor();
}
