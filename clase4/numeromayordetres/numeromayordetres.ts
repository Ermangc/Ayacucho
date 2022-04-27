let number1 = <HTMLInputElement>document.getElementById("number1");
let number2 = <HTMLInputElement>document.getElementById("number2");
let number3 = <HTMLInputElement>document.getElementById("number3");
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
number1 : Number;
number2 : Number;
number3 : Number;

btnEnviar.addEventListener ("click", () => {
  number1 = number1.value;
  number2 = number2.value;
  number3 = number3.value;
  if(number1 > number2 && number1 > number3){
    console.log("el numero" + " " + number1 + " " + "es mayor");
  } else if(number2 > number1 && number2 > number3){
    console.log("el numero" + " " + number2 + " " + "es mayor");
  } else(number3 > number1 && number3 > number2) {
    console.log("el numero" + " " + number3 + " " + "es mayor");
  }
});