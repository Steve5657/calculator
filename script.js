let output = document.getElementById("output");
let currentNumber = "";
let previousNumber = "";
let operator = "";

function clearOutput() {
    output.value = "";
    currentNumber = "";
    previousNumber = "";
    operator = "";
}

function appendNumber(number) {
    currentNumber += number;
    output.value = currentNumber;
}

function appendOperator(operatorSymbol) {
    if (operatorSymbol === "=") {
        performCalculation();
    } else {
        operator = operatorSymbol;
        previousNumber = currentNumber;
        currentNumber = "";
    }
}

function performCalculation() {
    let result = 0;
    switch (operator) {
        case "+":
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
    }
    output.value = result;
    currentNumber = result;
    previousNumber = "";
    operator = "";
}
