let numTabla = <HTMLInputElement>document.getElementById("date1");
let limTabla = <HTMLInputElement>document.getElementById("date2");
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");

let resultado: number = 0;
btnEnviar.addEventListener("click", () => {
  numTabla = Number(date1.value);
  limTabla = Number(date2.value);
  for (let contador: number = 1; contador <= limTabla; contador++) {
    resultado = numTabla * contador;
    console.log(numTabla, "x", contador, "=", resultado);
  }
});
