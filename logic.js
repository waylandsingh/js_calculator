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

// GLOBAL variables for state   
// arrays for operator/ands
let workingOperator = null;
let firstOperand = '';
let previousOperand = null
let workingOperand = '';
// immediately evaluate on the next operator input
let evalImmediately = false;

const results = document.querySelector('#results')

// numbers append and change display
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(number => {
    number.addEventListener('click', (e) => {
        if (previousOperand) {
            workingOperand += number.id
            results.textContent = workingOperand
        } else {
            firstOperand += number.id
            results.textContent = firstOperand
        }

 
    })
})



// operators "flash" the working set the 'immediate eval' flag
function operatorEvent(now=evalImmediately) {
    console.log(now)
    return null
}
// button is pressed, live evaluations instead
const operators = document.querySelectorAll('.operator')
operators.forEach(operator => {
    operator.addEventListener('click', (e)=>{
        if (firstOperand) {
            console.log('first operand')
            previousOperand = parseInt(firstOperand)
            firstOperand = false
            workingOperator = operator.id

        } else if (previousOperand) {
            previousOperand = operate(workingOperator, previousOperand, parseInt(workingOperand))
            console.log(previousOperand)
            workingOperator = operator.id
        } else {
            console.log('incorrect')
        }

        console.log(previousOperand, workingOperator)
    })
})
// if an operator and nothing in working operand, nothing
        // if operand, append to 'working operand'
        // if operator and something in working, append both respectively
    // respect order of operations during input (OR, do stacks?)

// event handler attachment of operator to each operator div