function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const colorChangeButton = document.querySelector('.change-color');
const color = document.querySelector('.color');
function clickHandler(event) {
  const hexColor = getRandomHexColor();
  body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
}
colorChangeButton .addEventListener('click', clickHandler);