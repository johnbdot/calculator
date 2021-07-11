const displayValue = document.querySelector('.display-value');
const btnNumber = document.querySelectorAll('.numberBtn');
const btnOperator = document.querySelectorAll('.operatorBtn');
let numberPressed = [];
let value = [];
let operator = "";

function add() {
    let result = value.map(num => num + numberPressed);
    displayValue.textContent = result.join('');
};

function subtract() {

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

// numbers display
btnNumber.forEach((btn) => btn.addEventListener("click", function(e) {
    const datasetNumber = e.target.dataset.number;
    value.push(datasetNumber);
    numberPressed.push(datasetNumber);
    displayValue.textContent = value.join('');
}));

// operators
btnOperator.forEach((btn) => btn.addEventListener("click", function(e) {
    const datasetOperator = e.target.dataset.operator;
    operator = datasetOperator;

    if (operator == "add") {
        add();
    } else if (operator == "subtract") {
        subtract();
    }
}));