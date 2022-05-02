let numTabla = <HTMLInputElement>document.getElementById("date1");
let limTabla = <HTMLInputElement>document.getElementById("date2");

numTabla = Number(date1.value);
limTabla = Number(date2.value);
let resultado: number = 0;

for (let contador: number = 1; contador <= limTabla; contador++) {
  resultado = numTabla * contador;
  console.log(numTabla, "x", contador, "=", resultado);
}
