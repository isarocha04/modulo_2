const button = document.getElementById('submit');
    button.addEventListener('click', () => {
      const n1 = document.getElementById('n1').value;
      const n2 = document.getElementById('n2').value;
      const n3 = document.getElementById('n3').value;
      const n = [n1, n2, n3];
      const result = document.getElementById('result');
      result.innerHTML = `Os nomes que você disse foram: ${n.sort()}.`;
});