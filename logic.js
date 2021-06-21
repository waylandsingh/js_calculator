function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

function operate(func, a, b) {
    const operations = {
        'add': add,
        'subtract': subtract,
        'multiply': multiply,
        'divide' : divide

    }

    return operations[func](a,b)
}

numberEventListeners = number => {
    number.addEventListener('click', (e) => {
        workingOperator += number.id
        console.log(workingOperator)
        results.textContent = workingOperator

    })
}

// GLOBAL variables for state   
// arrays for operator/ands
let operators = [];
let operands = [];
let workingOperator = '';
// immediately evaluate on the next operator input
let evalImmediately = false;

const results = document.querySelector('#results')

// numbers append and change display
const numbers = document.querySelectorAll('.number');
numbers.forEach(numberEventListeners)

// operators "flash" the working set the 'immediate eval' flag
// need to get and store operands and operators

    // button is pressed
        // if an operator and nothing in working operand, nothing
        // if operand, append to 'working operand'
        // if operator and something in working, append both respectively
    // respect order of operations during input (OR, do stacks?)
