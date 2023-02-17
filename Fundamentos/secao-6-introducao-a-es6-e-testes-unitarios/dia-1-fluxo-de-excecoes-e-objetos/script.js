const paragrafo = document.getElementById('result');
const value1 = document.getElementById('value1').value;
const value2 = document.getElementById('value2').value;
function calculateSum() {
  if (value1 === '' && value2 === '') throw new Error('Preencha os campos para realizar a soma');
  if (value1 === '' || value2 === '') throw new Error('Preencha os campos para realizar a soma');
  if (isNaN(value1) || isNaN(value2)) throw new Error('Informe dois números para realizar a soma');
  const result = Number(value1) + Number(value2);
  return result;
}

function displayResult(result) {
  paragrafo.innerHTML = `Resultado: ${result}`;
}

function sum() {
  try {
    const result = calculateSum();
    displayResult(result);
  } catch (errou) {
    paragrafo.innerHTML = `${errou}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
