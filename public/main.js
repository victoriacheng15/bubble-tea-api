let dragItem = null;

function handleDragStart() {
  dragItem = this;
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

function enbleSubmit() {
  const inputElem = document.querySelectorAll('input');
  const submitBtn = document.querySelector('.submit-btn');
  const checkForTea = [...inputElem].some((input) => input.name === 'tea');
  if (inputElem.length === 2 && checkForTea) {
    submitBtn.disabled = false;
  }
}

function handleDragDrop() {
  this.style.backgroundColor = 'lightblue';
  const input = document.createElement('input');
  const textValue = dragItem.innerText;
  input.classList.add('input');
  input.type = 'text';
  input.value = textValue;
  input.name = textValue.split(' ').some((word) => word === 'Tea') ? 'tea' : 'topping';
  input.readOnly = true;
  this.appendChild(input);
  disableDrags();
  enbleSubmit();
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
