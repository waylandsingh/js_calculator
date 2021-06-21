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

// operate works properly
// console.log(operate('add', 1,2))
// console.log(operate('subtract', 1,2))
// console.log(operate('multiply', 1,2))
// console.log(operate('divide', 1,2))

// need to get and store operands and operators

    // button is pressed
        // if an operator and nothing in working operand, nothing
        // if operand, append to 'working operand'
        // if operator and something in working, append both respectively
    // respect order of operations during input (OR, do stacks?)
