let display = document.getElementById('display');

function appendNumber(num) {
  if (display.innerText === '0') {
    display.innerText = num;
  } else {
    display.innerText += num;
  }
}

function appendOperator(op) {
  display.innerText += op;
}

function clearDisplay() {
  display.innerText = '0';
}

function toggleSign() {
  let value = parseFloat(display.innerText);
  display.innerText = String(value * -1) ;
}

function appendDot() {
    display.innerText += '.';
}

function calculateResult() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = 'Error';
  }
}