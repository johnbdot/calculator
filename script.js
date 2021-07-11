const displayValue = document.querySelector('.display-value')
const numberBtn = document.querySelectorAll('[data-number]')
const operatorBtn = document.querySelectorAll('[data-operator]')
const decimalBtn = document.querySelector('[data-decimal]')
const equalsBtn = document.querySelector('[data-equals]')

let value = []

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

numberBtn.forEach((btn) => btn.addEventListener("click", e => {
    console.log(e.target.dataset)
}))