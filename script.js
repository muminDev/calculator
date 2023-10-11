const savedData = localStorage.getItem('result') || '0';
console.log(JSON.parse(savedData));
document.getElementById('display');
display.value = JSON.parse(savedData);

function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
  localStorage.removeItem('result');
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
      display.value = eval(display.value);
  } catch (error) {
      display.value = 'Error';
  }
  localStorage.setItem('result', JSON.stringify(display.value));
}
