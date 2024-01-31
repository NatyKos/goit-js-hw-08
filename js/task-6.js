function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const boxes = document.getElementById('boxes');

btnCreate.addEventListener('click', () => {
  const amount = input.value;
  input.value = '';
  createBoxes(amount);
  })

function createBoxes(amount) {
  boxes.innerHTML = '';
  if (amount >= 1 && amount <= 100) {
    let size = 30;
    for (let index = 1; index <= amount; index++) {
      boxes.insertAdjacentHTML("beforeend",
        `<div class = "box"
      style = "width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};">
    </div>`);
      size += 10;
    }
  } 
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
btnDestroy.addEventListener('click', destroyBoxes)