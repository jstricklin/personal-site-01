// assign variables
var mathArray = [];

var operators = document.querySelectorAll(".operator:not(#clear):not(#equals)");
console.log(operators);

var clear = document.querySelector("#clear");
console.log(clear);

var equals = document.querySelector("#equals");
console.log(equals);

var screen = document.querySelector("#screen")
//assign numbers

var numbers = document.querySelectorAll("span:not(.operator)");
console.log(numbers);

//operator boolean
isError = false;

var operatorAmt = 0;

// event handling 
clear.addEventListener("click", function(){
    console.log("CLEAR!");
    Clear();
})
equals.addEventListener("click", function () {
    // EvaluateMath();
    ValidateMath();
    console.log("EQUALS!");
})
for (let i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", function(){
        console.log("Operator clicked was " + this.textContent);
        ValidateOperator(this);
    })
}
for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function(){
        UpdateArray(Number(this.textContent));
        UpdateScreen(this.textContent);
        console.log(this.textContent);
    })
}
// update screen/array scripts below

function UpdateScreen(display) {
    if (isError) {
        Clear();
        isError = false;
    }
    screen.textContent += display;
}

function UpdateArray(op) {
    mathArray += op;
}

function Clear(){
    mathArray = [];
    screen.textContent = "";
    operatorAmt = 0;
}

function ValidateOperator(operator){
    if (operator.textContent == "x"){
        UpdateArray("*");
    } else if (operator.textContent == "÷") {
        UpdateArray("/");
    } else {
        UpdateArray(operator.textContent);
    }
    UpdateScreen(operator.textContent);
    operatorAmt++;
}

function ValidateMath() {
    if (operatorAmt > 1) {
        Error();
    } else {
        EvaluateMath();
    }
}

function EvaluateMath(){
    var solution = eval(mathArray);
    if (solution == Infinity){
        Error();
        return;
    }
    screen.textContent = "";
    UpdateScreen(solution);
    mathArray = [solution];
    operatorAmt = 0;
}

function Error(){
    Clear();
    UpdateScreen("ERROR!");
    console.log("ERROR");
    isError = true;
}