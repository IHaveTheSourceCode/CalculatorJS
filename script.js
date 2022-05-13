let num1 = "";
let num2 = "";
let expression;

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

// calculated the outcome
function calculate() {
  switch (expression) {
    case "+":
      return +num1 + +num2;
    case "-":
      return +num1 - +num2;
    case "*":
      return +num1 * +num2;
    case "/":
      return +num1 / +num2;
  }
}

function fill(button) {
  // makes expression buttons untargetable
  // if num1 is empty
  if (num1 == "" && isNaN(parseInt(button.textContent))) {
    return;
  }

  // clears the display and number values
  else if (button.textContent == "AC") {
    display.textContent = "";
    num1 = "";
    num2 = "";
  }

  // equals button
  // if expression is undefined then
  // display.textContent = num1
  else if (button.textContent == "=") {
    if (expression == undefined) {
      return;
    } else {
      display.textContent = calculate();
      num2 = calculate();
      num1 = "";
    }
  }

  // gets the expression
  // saves current number no num2 variable
  // clears num1 value
  // if num1 is not a number then change expression only
  else if (isNaN(parseInt(button.textContent))) {
    expression = button.textContent;
    // if both numbers are present then calculate()
    if (!isNaN(num1) && !isNaN(num2)) {
      display.textContent = calculate();
      num2 = calculate();
      num1 = "";
    }
    // when there's only one number
    // arrange num1 value to num2 and clear display
    else {
      display.textContent = "";
      num2 = num1;
      num1 = "";
    }
  }

  // fills display with numbers until it's full
  else {
    if (display.textContent.length > 7) return;
    else {
      display.append(button.textContent);
      num1 += button.textContent;
    }
  }
}
// prints ERROR if number won't fit in display

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    fill(button);
  });
});
