const resultElement = document.getElementById("result");

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

const submitBtn = document.getElementById("submit");
let action = "+";

plusBtn.onclick = function () {
  action = "+";
};

minusBtn.onclick = function () {
  action = "-";
};

multiplyBtn.onclick = function () {
  action = "*";
};

divideBtn.onclick = function () {
  action = "/";
};

function printResult(result) {
  result < 0
    ? (resultElement.style.color = "red")
    : (resultElement.style.color = "green");

  resultElement.textContent = result;
}

function computeNumbersWithAction(input1, input2, actionSymbol) {
  const num1 = +input1.value;
  const num2 = +input2.value;

  switch (actionSymbol) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      return num1 / num2;
  }
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action);
  printResult(result);
};
