
var inputNumber = "";
var prevInputNumber = "";
var prevInputOperator = "";
var equation = "";
var display = "";
var basicOperators = "x-+÷%";
var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = calc;
}

function calc() {
    var btnValue = this.innerHTML;
    switch (btnValue) {
        case "C":
            inputNumber = "";
            equation = "";
            display = "";
            prevInputNumber = "";
            prevInputOperator = "";
            break;
        case ".":
            if (inputNumber.length == 0) {
                inputNumber += "0.";
                equation += "0.";
            }
            if (inputNumber.indexOf(".") == -1) {
                inputNumber += btnValue;
                equation += btnValue;
            }
            display += btnValue;
            break;
        case "+":
        case "-":
            if (basicOperators.indexOf(display.slice(-1)) == -1) {
                equation += btnValue;
                display += btnValue;
            }
            prevInputNumber = inputNumber;
            prevInputOperator = btnValue;
            inputNumber = "";
            break;
        case "x":
            if (basicOperators.indexOf(display.slice(-1)) == -1) {
                equation += "*";
                display += btnValue;
            }
            prevInputNumber = inputNumber;
            prevInputOperator = btnValue;
            inputNumber = "";
            break;
        case "÷":
            if (basicOperators.indexOf(display.slice(-1)) == -1) {
                equation += "/";
                display += btnValue;
            }
            prevInputNumber = inputNumber;
            prevInputOperator = btnValue;
            inputNumber = "";
            break;
        case "%":
            if (basicOperators.indexOf(display.slice(-1)) == -1) {
                switch (prevInputOperator) {
                    case "+":
                        equation += "-" + inputNumber + "+(" + prevInputNumber + "/100*" + inputNumber + ")";
                        break;
                    case "-":
                        equation += "+" + inputNumber + "-(" + prevInputNumber + "/100*" + inputNumber + ")";
                        break;
                    default:
                        equation += "*0.01*"
                    break;
            }
            display += btnValue;
        }
            inputNumber = "";
            break;
        case "=":
            if (basicOperators.indexOf(display.slice(-1)) !== -1) {
                equation = display.slice(0, -1)
            }
            try {
                var result = eval(equation).toString();
                inputNumber = result;
                equation = result;
                display = equation;
            }
            catch (SyntaxError) {
                alert("The syntax of the equation is not correct!")
            }
            finally {
                break;
            }
        default:
            equation += btnValue;
            inputNumber += btnValue;
            display += btnValue;
            break;
    }
    document.getElementById("display").innerHTML = display;

    /* The below lines are for testing.
    document.getElementById("btnValue").innerHTML = "btnValue: " + btnValue;
    document.getElementById("inputNumber").innerHTML = "inputNumber: " + inputNumber;
    document.getElementById("equation").innerHTML = "equation: " + equation;
    document.getElementById("screen").innerHTML = "display: " + display;
    document.getElementById("prevInputNumber").innerHTML = "prevInputNumber: " + prevInputNumber;
    document.getElementById("prevInputOperator").innerHTML = "prevInputOperator: " + prevInputOperator;
    */
}