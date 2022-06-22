const button = document.getElementById('submit');
button.addEventListener('click', function () {
  const numero = document.getElementById('number').value;
  if (
    (numero.length === 3 && numero[0] !== '-') ||
    (numero.length === 4 && numero[0] === '-')
  ) {
    const numeroInt = parseInt(numero);
    const centena = parseInt(numero.substring(0, numeroInt > 0 ? 1 : 2));
    if (centena % 2 == 0) {
      document.getElementById('resultado').innerHTML = `A centena é (${centena}) é par.`;
    } else {
      document.getElementById('resultado').innerHTML = `A centena é (${centena}) é ímpar.`;
    }
  } else {
    document.getElementById('resultado').innerHTML = `O número informado não é de três dígitos.`;
  }
});