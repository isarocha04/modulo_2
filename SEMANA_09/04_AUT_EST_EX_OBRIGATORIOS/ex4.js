const fibonacci = (n) => {
  if (n <= 2) return 1;

  let a = 0; 
  let b = 1; 
  let c = 0; 
  for (let i = 1; i < n; i++) {
    c = a + b; 
    a = b; 
    b = c; 
  }
  return c;
};


const button = document.getElementById('submit');
button.addEventListener('click', () => {
  const number = parseInt(document.getElementById('number').value);
  const result = document.getElementById('result');
  result.innerHTML = `O n-ésimo termo da série de Fibonacci é ${fibonacci(number)}. 
  A série de Fibonacci até o n-ésimo termo é:`;
  for (let i = 1; i <= number; i++) {
    result.innerHTML += ` ${fibonacci(i)}`;
  }
});