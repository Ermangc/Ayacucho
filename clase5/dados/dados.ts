let n = <HTMLInputElement>document.getElementById("dato");
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");

let probabCara: number = 1 / 6;
let probabFinal: number = 1;

btnEnviar.addEventListener("click", () => {
  n = Number(dato.value);
  for (let contador = 1; contador <= n; contador++) {
    probabFinal = probabFinal * probabCara;
  }
  console.log("la Probabilidad es ", probabFinal);
});
