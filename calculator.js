let currentNumber = "";
let result = null;
let operation = null;



function clickNumberHandler(num) {
  // alert(num);
  currentNumber = currentNumber + num;
  display();
}

function plusHandler(oper) {
  if (result === null) {
    result = Number(currentNumber);
  } else {
    equalHandler();
  } 
  currentNumber = "";
  operation = oper;
  display();
}

function minusHandler(oper) {
  if (result === null) {
    result = Number(currentNumber);
  } else {
    equalHandler();
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
  if (operation === "-") {
    result = result - Number(currentNumber);
  }
  currentNumber = "";
  operation = null;
  const current = document.querySelector(".current-operand");
  current.innerText = result;
  const previous = document.querySelector(".previous-operand");
  previous.innerText = "";
}
