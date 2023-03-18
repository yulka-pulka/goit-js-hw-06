const controls = document.querySelector('#controls');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxSize = 30;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    const size = boxSize + i * 10;
    box.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background-color: ${getRandomHexColor()};
    `;
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = +controls.querySelector('input').value;
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);
