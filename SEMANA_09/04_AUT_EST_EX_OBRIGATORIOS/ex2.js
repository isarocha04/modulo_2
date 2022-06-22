const button = document.getElementById('submit');
button.addEventListener('click', () => {
  const number = document.getElementById('number').value;
  const sum = number.split('').reduce((acc, curr) => {
    return acc + parseInt(curr)
  }, 0);
  const result = document.getElementById('result');
  result.innerHTML = `A soma desse número aí é: ${sum}.`;
});