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
}

function noPointerClass(arr, action) {
  return action === 'add'
    ? arr.forEach(((elem) => elem.classList.add('no-pointer')))
    : arr.forEach(((elem) => elem.classList.remove('no-pointer')));
}

function disableDrags() {
  const inputElem = document.querySelectorAll('input');
  const teasCol = document.querySelector('.teas-list');
  const toppingsCol = document.querySelector('.toppings-list');
  if (inputElem.length === 2) {
    noPointerClass([teasCol, toppingsCol], 'add');
  }
}

function enbleSubmit() {
  const inputElem = document.querySelectorAll('input');
  const submitBtn = document.querySelector('.submit-btn');
  const checkForTea = [...inputElem].some((input) => input.name === 'tea');
  const checkForTopping = [...inputElem].some((input) => input.name === 'topping');
  if (inputElem.length === 2 && checkForTea && checkForTopping) {
    submitBtn.disabled = false;
  }
}

function handleDragDrop() {
  this.style.backgroundColor = '#ece0d1';
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

function reset(e) {
  e.preventDefault();
  const inputs = [...document.querySelectorAll('input')];
  const teasCol = document.querySelector('.teas-list');
  const toppingsCol = document.querySelector('.toppings-list');
  inputs.forEach((element) => element.remove());
  noPointerClass([teasCol, toppingsCol]);
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

// reset
const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', reset);
