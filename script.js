let num1;
let num2;
let expression;

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

function fill(button) {
  // makes expression buttons untargetable
  // if num1 is empty
  if (num1 == undefined && isNaN(parseInt(button.textContent))) {
    return;
  }

  // clears the display and number values
  else if (button.textContent == "AC") {
    display.textContent = "";
    num1 = undefined;
    num2 = undefined;
  }

  // gets the expression
  // swaps current number to num2 permanently
  // saves number from display
  else if (isNaN(parseInt(button.textContent))) {
  }

  // fills display with numbers until it's full
  else if (parseInt(button.textContent)) {
    if (display.textContent.length > 7) return;
    else {
      display.append(button.textContent);
      num1 += button.textContent;
    }
  }
}
// prints ERROR if number won't fit in display

// calculates the outcome and prints it on display
// replaces num1 with calculated number

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    fill(button);
  });
});
