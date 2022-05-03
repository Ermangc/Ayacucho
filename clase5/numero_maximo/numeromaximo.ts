let conIngresos: boolean = false;
let num: number = Number(prompt("Ingrese un numero"));
let maxNum: number = num;
while (num !== 0) {
  conIngresos = true;
  if (num > maxNum) {
    maxNum = num;
  }
  num = Number(prompt("ingrese un numero"));
}
if (conIngresos) {
  console.log("el maximo es", maxNum);
}
