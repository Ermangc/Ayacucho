let n: number = <HTMLInputElement>document.getElementById("dato");
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");

n = dato.value;
let probabCara: number = 1 / 6;
let probabFinal: number = 1;

for (let contador = 1; contador <= n; contador++) {
  probabFinal = probabFinal * probabCara;
}
console.log("la Probabilidad es ", probabFinal);
