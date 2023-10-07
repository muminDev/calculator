let calculation = '';

function calculate(amount) {
  calculation += amount
  console.log(calculation);  
}

function evaluate() {
  calculation = eval(calculation);
  console.log(calculation);  
}

function clear() {
  calculation = '';
  console.log(calculation);
}
