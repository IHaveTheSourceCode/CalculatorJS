const buttons = document.querySelectorAll("button");
function print() {
  console.log("Hi");
}

// buttons.addEventListener("click", print());
buttons.forEach((button) => {
  button.addEventListener("click", print);
});
