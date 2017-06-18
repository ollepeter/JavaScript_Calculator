
var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = calc;
}

function calc() {
    var btnValue = this.innerHTML;
    document.getElementById("display").innerHTML += btnValue;
    var equation = document.getElementById("display").innerHTML;
    switch (btnValue) {
        case "C":
            document.getElementById("display").innerHTML = "";
            break;
        case "=":
            var finalEquation = equation.slice(0, -1);
            result = eval(finalEquation);
            document.getElementById("display").innerHTML = result;
            break;
    }

    

    document.getElementById("btnValue").innerHTML = "btnValue: " + btnValue;
    document.getElementById("equation").innerHTML = "equation: " + equation;
    document.getElementById("finalEquation").innerHTML = "finalEquation: " + finalEquation;
    document.getElementById("result").innerHTML = "result: " + result;
}