let firstNumber = <HTMLInputElement>document.getElementById("number1");
let secondNumber = <HTMLInputElement>document.getElementById("number2");
let current, addiction: number;
let btnSend = <HTMLButtonElement>document.getElementById("btnSend");
current = firstNumber;
addiction = 0;

btnSend.addEventListener("click", () => {
  firstNumber = Number(number1.value);
  secondNumber = Number(number2.value);
  for (firstNumber; firstNumber <= secondNumber; firstNumber++) {
    addiction = addiction + firstNumber;
  }
  console.log("el resultado de la suma es: ", addiction);
});

/*firstNumber = number1.value;
secondNumber = number2.value;
while (current <= secondNumber) {
  addiction = addiction + current;
  current++;
}
console.log("el resultado de la suma es: ", addiction);
*/
