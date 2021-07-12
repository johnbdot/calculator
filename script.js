const displayValue = document.querySelector('.display-value')
const numberBtn = document.querySelectorAll('[data-number]')
const operatorBtn = document.querySelectorAll('[data-operator]')
const decimalBtn = document.querySelector('[data-decimal]')
const equalsBtn = document.querySelector('[data-equals]')
const clearBtn = document.querySelector('[data-clear]')
const backspaceBtn = document.querySelector('[data-backspace]')

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
    const number = e.target.dataset.number
    value.push(number)
    displayValue.textContent += number
    console.log(value)
}))

operatorBtn.forEach((btn) => btn.addEventListener("click", e => {
    const operator = e.target.dataset.operator
    value.push(operator)
    console.log(value)
}))

decimalBtn.addEventListener("click", e => {
    const decimal = e.target.dataset.decimal
    console.log(decimal)
})

equalsBtn.addEventListener("click", () => {
    const result = value.join('')
    console.log(eval(result))
})