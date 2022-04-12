let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato = <HTMLInputElement>document.getElementById("dato");
let numero: number;

btnEnviar.addEventListener("click", () => {
  numero = Number(dato.value);
  if (numero % 2 === 0) {
    console.log("el numero es par" + numero);
  } else {
    console.log("el numero es impar");
  }
});
