let currentInput = '';
let firstNumber = null;
let operator = null;
let currentExpression = ''; 

function appendNumber(number) {
    currentInput += number;
    currentExpression += number; 
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === '') return;
    if (firstNumber === null) {
        firstNumber = parseFloat(currentInput);
    } else {
        calculateResult();
    }
    operator = op;
    currentExpression += ` ${op} `; 
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    if (firstNumber === null || operator === null || currentInput === '') return;
    const secondNumber = parseFloat(currentInput);
    let result;
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = secondNumber !== 0 ? firstNumber / secondNumber : 'Помилка';
            break;
    }

    if (typeof result === 'number') {
        currentInput = (Number.isInteger(result) ? result : result.toFixed(2)).toString();
    } else {
        currentInput = result;
    }

    currentExpression = currentInput; 
    operator = null;
    firstNumber = null;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    firstNumber = null;
    operator = null;
    currentExpression = ''; 
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('output');
    display.textContent = currentExpression || '0'; 
}
