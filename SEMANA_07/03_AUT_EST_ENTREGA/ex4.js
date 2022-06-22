var persons = document.querySelector('#persons');
var time = document.querySelector('#time');
var calculate = document.querySelector('#calculate');
var result = document.querySelector('#result');
var cost = document.querySelector('#cost');

calculate.addEventListener('click', function () {
  var price = 0;
  var personsValue = persons.value;
  var timeValue = time.value;

  if (personsValue <= 0) {
    alert('Informe o número de pessoas');
    return;
  }

  if (timeValue === 'day') {
    preço = personsValue * 200;
    if (personsValue > 50) {
      preço *= 0.6;
    }
  } else {
    preço = personsValue * 100;
    if (personsValue > 50) {
      preço *= 0.8;
    }
  }

  cost.innerHTML = preço;
  result.style.display = 'block';
});