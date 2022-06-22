var quantity = document.querySelector('#quantity');
var add = document.querySelector('#add');
var remove = document.querySelector('#remove');

add.addEventListener('click', function () {
  quantity.value++;
});

remove.addEventListener('click', function () {
  quantity.value--;
  if (quantity.value < 0) {
    quantity.value = 0;
  }
});