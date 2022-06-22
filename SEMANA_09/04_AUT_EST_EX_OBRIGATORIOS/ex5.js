const isPrime = (numero) => {
    if (numero < 2) {
      return false;
    }
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  };

  const button = document.getElementById('submit');
  button.addEventListener('click', () => {
    const n1 = parseInt(document.getElementById('n1').value);
    const n2 = parseInt(document.getElementById('n2').value);
    const primes = [];
    for (let i = n1; i <= n2; i++) {
      if (isPrime(i)) primes.push(i);
    }
    const result = document.getElementById('result');
    result.innerHTML = `Os números primos no intervalo [${n1}, ${n2}] são: ${primes}.`;
  });