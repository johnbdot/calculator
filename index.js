const displayValue = document.querySelector('.display-value');
const button = document.querySelectorAll('.number');

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(a, b) {
    return add(a, b);
};

let value = []
button.forEach((btn) => btn.addEventListener("click", function(e) {
    const number = e.target.dataset.number;
    value.push(number);
    displayValue.textContent = value;
}));