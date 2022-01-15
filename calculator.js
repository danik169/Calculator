let ecranValue = "";
const elements = [];
let currentNumber = "";
let result = null;
let operation = null;



function clickNumberHandler(num) {
  // alert(num);
  currentNumber = currentNumber + num;
  display();
}

function operationButtons(oper) {
  if (result === null) {
    result = Number(currentNumber);
  } else {
    result = result + Number(currentNumber);
  }
  currentNumber = "";
  operation = oper;
  display();
}

function display() {
  if (result != null) {
    const previous = document.querySelector(".previous-operand");
    previous.innerText = result + operation;
  }
  const current = document.querySelector(".current-operand");
  current.innerText = currentNumber;
}

function equalHandler() {
  if (operation === "+") {
    result = result + Number(currentNumber);
    
  }
  const current = document.querySelector(".current-operand");
  current.innerText = result;
  const previous = document.querySelector(".previous-operand");
  previous.innerText = "";
}