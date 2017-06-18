
var inputNumber = "";
var equation = "";
var display = "";
var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = calc;
}

function calc() {
    equation = document.getElementById("display").innerHTML;
    inputNumber = equation;
    var btnValue = this.innerHTML;
    switch (btnValue) {
        case "C":
            equation = "";
            inputNumber = "";
            display = equation;
            break;
        case ".":
            console.log(inputNumber.length)
            if (inputNumber.indexOf(".") == -1) {
                equation += btnValue;
                inputNumber += btnValue;
            }
            if (inputNumber.length == 1) {
                equation = "0" + btnValue;
                inputNumber = "0" + btnValue;
            }
            display = equation;
            break;
                
        case "=":
            equation += btnValue;
            var finalEquation = equation.slice(0, -1);
            result = eval(finalEquation);
            display = result;
            break;
        default:
            equation += btnValue;
            inputNumber += btnValue;
            display = equation;
    }
    document.getElementById("display").innerHTML = display;

    document.getElementById("btnValue").innerHTML = "btnValue: " + btnValue;
    document.getElementById("inputNumber").innerHTML = "inputNumber: " + inputNumber;
    document.getElementById("equation").innerHTML = "equation: " + equation;
    document.getElementById("finalEquation").innerHTML = "finalEquation: " + finalEquation;
    document.getElementById("result").innerHTML = "result: " + result;
}