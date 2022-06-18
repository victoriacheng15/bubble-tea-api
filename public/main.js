let dragItem = null;
function dragStart() {
  dragItem = this;
  // setTimeout(() => (this.className = 'invisible'), 0);
  console.log('dragstart');
}

function dragEnd() {
  // this.className = 'item';
  // dragItem = null;
  console.log('dragend');
}

function dragOver(e) {
  // e.preventDefault();
  console.log('dragover');
  console.log(this);
}

function dragDrop() {
  // this.append(dragItem);
  console.log('drop');
}

(function () {
  const items = document.querySelectorAll('.item');
  items.forEach((item) => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
  });

  // order box
  const order = document.querySelector('.order');
  order.addEventListener('dragover', dragOver);
  order.addEventListener('dragdrop', dragDrop);
}());
