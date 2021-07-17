const displayValue = document.querySelector(".display-value");
const numberBtn = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");
const decimalBtn = document.querySelector("[data-decimal]");
const equalsBtn = document.querySelector("[data-equals]");
const clearBtn = document.querySelector("[data-clear]");
const backspaceBtn = document.querySelector("[data-backspace]");

let firstOperand = "";
let secondOperand = "";
let resetScreen = false;
let currentOperation = null;

// functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function resetDisplay() {
  displayValue.textContent = "";
  resetScreen = false;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return null;
  }
}

function calculate() {
  if (currentOperation === null || resetScreen) return;
  secondOperand = displayValue.textContent;
  displayValue.textContent = operate(
    currentOperation,
    firstOperand,
    secondOperand
  );
  currentOperation = null;
}

// click events
numberBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const number = e.target.dataset.number;

    if (displayValue.textContent === "0" || resetScreen) resetDisplay();
    displayValue.textContent += number;
  })
);

operatorBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const operator = e.target.dataset.operator;

    if (currentOperation !== null) calculate();

    firstOperand = displayValue.textContent;
    currentOperation = operator;
    resetScreen = true;
  })
);

decimalBtn.addEventListener("click", (e) => {
  const decimal = e.target.dataset.decimal;

  if (resetScreen) resetDisplay();
  if (displayValue.textContent.includes(".")) return;
  displayValue.textContent += decimal;
});

equalsBtn.addEventListener("click", () => {
  calculate();
});

clearBtn.addEventListener("click", () => {
  firstOperand = "";
  secondOperand = "";
  resetScreen = false;
  currentOperation = null;
  displayValue.textContent = "0";
});

backspaceBtn.addEventListener("click", () => {
  displayValue.textContent = displayValue.textContent.toString().slice(0, -1);
});
