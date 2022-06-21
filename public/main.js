let dragItem = null;

function handleDragStart() {
  dragItem = this.textContent;
  this.style.opacity = '0.4';
}

function handleDragEnd() {
  dragItem = null;
  this.style.opacity = '1';
}

function handleDragOver(e) {
  e.preventDefault();
  this.style.backgroundColor = 'lightcyan';
}

function disableDrags() {
  const inputElem = document.querySelectorAll('input');
  const teasCol = document.querySelector('.teas-list');
  const toppingsCol = document.querySelector('.toppings-list');
  if (inputElem.length === 2) {
    teasCol.classList.add('no-pointer');
    toppingsCol.classList.add('no-pointer');
  }
}

function handleDragDrop() {
  this.style.backgroundColor = 'lightblue';
  const input = document.createElement('input');
  input.classList.add('input');
  input.type = 'text';
  input.value = dragItem;
  input.name = dragItem.endsWith('tea') ? 'tea' : 'topping';
  input.readOnly = true;
  this.appendChild(input);

  disableDrags();
}

const items = document.querySelectorAll('.item');
items.forEach((item) => {
  item.addEventListener('dragstart', handleDragStart);
  item.addEventListener('dragend', handleDragEnd);
});

// order box
const orderBox = document.querySelector('.order-box');
orderBox.addEventListener('dragover', handleDragOver);
orderBox.addEventListener('drop', handleDragDrop);
