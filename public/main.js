const teasCol = document.querySelector('.teas-list');
const toppingsCol = document.querySelector('.toppings-list');
const items = document.querySelectorAll('.item');
const orderBox = document.querySelector('.order-box');
const submitBtn = document.querySelector('.submit-btn');
const clearBtn = document.querySelector('.clear-btn');
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

function disabledButton(boolean) {
  boolean ? submitBtn.disabled = true : submitBtn.disabled = false;
}

function disableDrags() {
  const inputElems = document.querySelectorAll('input');
  if (inputElems.length === 2) {
    noPointerClass([teasCol, toppingsCol], 'add');
  }
}

function enbleSubmit() {
  const inputElems = document.querySelectorAll('input');
  const checkForTea = [...inputElems].some((input) => input.name === 'tea');
  const checkForTopping = [...inputElems].some((input) => input.name === 'topping');
  if (inputElems.length === 2 && checkForTea && checkForTopping) {
    disabledButton(false);
  }
}

function handleDragDrop() {
  this.style.backgroundColor = '#ece0d1';
  const input = document.createElement('input');
  const typeForInputs = (word) => word === 'Tea';
  const textValue = dragItem.innerText;
  input.classList.add('input');
  input.type = 'text';
  input.value = textValue;
  input.name = textValue.split(' ').some(typeForInputs) ? 'tea' : 'topping';
  input.readOnly = true;
  this.appendChild(input);
  disableDrags();
  enbleSubmit();
}

function reset(e) {
  e.preventDefault();
  const inputElems = [...document.querySelectorAll('input')];
  inputElems.forEach((element) => element.remove());
  noPointerClass([teasCol, toppingsCol]);
  disabledButton(true);
}

// even listeners
items.forEach((item) => {
  item.addEventListener('dragstart', handleDragStart);
  item.addEventListener('dragend', handleDragEnd);
});

// order box
orderBox.addEventListener('dragover', handleDragOver);
orderBox.addEventListener('drop', handleDragDrop);

// reset
clearBtn.addEventListener('click', reset);
