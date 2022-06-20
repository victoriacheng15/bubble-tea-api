let dragItem = null;

function handleDragStart() {
  dragItem = this.textContent;
  this.style.opacity = '0.4';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function handleDragEnd() {
  this.className = 'item';
  dragItem = null;
  this.style.opacity = '1';
}

function handleDragOver(e) {
  e.preventDefault();
  this.style.backgroundColor = 'lightcyan';
}

function handleDragDrop() {
  this.style.backgroundColor = 'lightblue';
  const input = document.createElement('input');
  input.classList.add('input');
  input.value = dragItem;
  this.appendChild(input);
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
