const display = document.querySelector('.display-value');
const button = document.querySelectorAll('button');

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

button.forEach((btn) => btn.addEventListener("click", function(e) {
    const dataset = e.target.dataset.button;
    display.textContent = dataset;
}));