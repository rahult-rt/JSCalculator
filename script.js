const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-Clear]");
const numberButton = document.querySelectorAll("[data-number]");
const operatorButton = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const previousOperandDisplayScreen = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandDisplayScreen = document.querySelector(
  "[data-current-operand]"
);

allClear = () => {
  currentOperandDisplayScreen.innerText = "";
  previousOperandDisplayScreen.innerText = "";
};

backSpace = () => {
  currentOperandDisplayScreen.innerText =
    currentOperandDisplayScreen.innerText.slice(0, -1);
};

appendNumber = (number) => {
  if (
    number.innerText === "." &&
    currentOperandDisplayScreen.innerText.includes(".")
  )
    return;
  currentOperandDisplayScreen.innerText += number.innerText;

  console.log(currentOperandDisplayScreen.innerText);
};

//Event listners
numberButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    appendNumber(e.target);
  });
});

allClearButton.addEventListener("click", () => {
  allClear();
  console.log(this);
});

deleteButton.addEventListener("click", () => {
  backSpace();
  console.log(this);
});

operatorButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    appendNumber(e.target);
    // operation(e.target);
  });
});

equalsButton.addEventListener("click", () => {
  previousOperandDisplayScreen.innerText =
    currentOperandDisplayScreen.innerText;
  currentOperandDisplayScreen.innerText = eval(
    currentOperandDisplayScreen.innerText
  );
});
