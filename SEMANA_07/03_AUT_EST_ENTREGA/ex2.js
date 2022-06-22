var valor1 = document.querySelector('#value1');
var valor2 = document.querySelector('#value2');
var swap = document.querySelector('#swap');

swap.addEventListener('click', function () {
  var temp = valor1.value;
  valor1.value = valor2.value;
  valor2.value = temp;
});