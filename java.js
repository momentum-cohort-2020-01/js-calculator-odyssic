// get 1 to display in in display area

const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

updateDisplay();

document.getElementById("buttons").addEventListener("click");

console.log(1)

// function updateDisplay {
//     for "click" in button;
//     display number in (display)
// }