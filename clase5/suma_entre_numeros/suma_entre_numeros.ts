let firstNumber: number;
let secondNumber: number;
let current, addiction: number;
let btnSend = <HTMLButtonElement>document.getElementById("btnSend");
current = firstNumber;
addiction = 0;
/*btnSend.addEventListener("click", () => {
  firstNumber = number1.value;
  secondNumber = number2.value;
  for (current = firstNumber; current <= secondNumber; current++) {
    addiction = addiction + current;
  }
  console.log("el resultado de la suma es: ", addiction);
});*/
btnSend.addEventListener("click", () => {
  firstNumber = number1.value;
  secondNumber = number2.value;
  while (current <= secondNumber) {
    addiction = addiction + current;
    current++;
  }
  console.log("el resultado de la suma es: ", addiction);
});
