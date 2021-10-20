//make = untargetable before second number is typed
//make expressions untargetable before first number is typed
//function that adds numbers while clicking buttons to some variable,
// works till expression is empty(null)
let firstNumber = "";
let expression = null;
let secondNumber = "";

const numBtns = document.getElementsByClassName("numBtn");
const exp = document.getElementsByClassName("exp");

let display = document.getElementById("display");

let getExpression = function(exp){
    expression = exp;
}
let dissableExpressions = function(){
    for(let i = 0; i < exp.length; i++){
        exp[i].disabled = true;
    }
}
let enableExpressions = function(){
    for(let i = 0; i < exp.length; i++){
        exp[i].disabled = false;
    }
}
let ev = function(){
    if(expression == "plus"){
        firstNumber = firstNumber + secondNumber;
        display.innerHTML = toString(firstNumber);
    }else if(expression == "minus"){
        firstNumber = toString(firstNumber - secondNumber);
        display.innerHTML = firstNumber;
    }else if(expression == "star"){
        firstNumber = toString(firstNumber * secondNumber);
        display.innerHTML = firstNumber;
    }else if(expression == "slash"){
        firstNumber = toString(firstNumber / secondNumber);
        display.innerHTML = firstNumber;
    }
}
let dissableNumbers = function(){
    for(let i = 0; i < numBtns.length; i++){
        numBtns[i].disabled = true;
    }
    //dissable numbers buttons if number is 100000000 or above
}
dissableExpressions();

let printNumbers = function(number){
    if(expression == null){
        firstNumber += number;
        //add number to display div - CHECKED
        display.innerHTML += number;
        enableExpressions();
        if(firstNumber >= 100000000){
            dissableNumbers();
        }
    }else{
        secondNumber += number;
        //add number to display div - CHECKED
        display.innerHTML += number;
    }
}
// needs to stop if something other than number is clicked
// if its number continue, if it's AC reset function(break),
// else save expression
//make expression untargetable after starting typing number and make
//  = targetable
//reset all(3) variables and display