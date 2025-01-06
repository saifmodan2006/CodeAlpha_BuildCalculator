let currentInput = '';
        let firstOperand = null;
        let operator = null;

        const display = document.getElementById('display');

        function appendNumber(number) {
            currentInput += number;
            updateDisplay();
        }

        function chooseOperation(op) {
            if (currentInput === '') return;
            if (firstOperand !== null) calculate();
            operator = op;
            firstOperand = parseFloat(currentInput);
            currentInput = '';
        }

        function calculate() {
            if (operator === null || currentInput === '') return;
            const secondOperand = parseFloat(currentInput);
            let result;
            switch (operator) {
                case '+':
                    result = firstOperand + secondOperand;
                    break;
                case '-':
                    result = firstOperand - secondOperand;
                    break;
                case '*':
                    result = firstOperand * secondOperand;
                    break;
                case '/':
                    result = secondOperand !== 0 ? firstOperand / secondOperand : 'Error';
                    break;
                default:
                    return;
            }
            currentInput = result.toString();
            operator = null;
            firstOperand = null;
            updateDisplay();
        }

        function clearDisplay() {
            currentInput = '';
            firstOperand = null;
            operator = null;
            updateDisplay();
        }

        function updateDisplay() {
            display.value = currentInput;
        }