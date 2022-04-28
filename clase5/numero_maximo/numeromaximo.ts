let conIngresos: boolean = false;
let num = Number(prompt("Ingrese un numero"));
let maxNum: number = num;
while (num != 0) {
  conIngresos = true;
  if (num > maxNum) {
    maxNum = num;
  }
  let num = Number(prompt("ingrese un numero"));
}
console.log("el maximo es", maxNum);

//if (conIngreso) {
//console.log("el maximo es", maxNum);
//}
