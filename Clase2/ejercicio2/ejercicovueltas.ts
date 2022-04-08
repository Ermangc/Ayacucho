let dato1 = <HTMLInputElement>document.getElementById("dato1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");
let dato3 = <HTMLInputElement>document.getElementById("dato3");
let dato4 = <HTMLInputElement>document.getElementById("dato4");
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");

let vuelta1: Number;
let vuelta2: Number;
let vuelta3: Number;
let vuelta4: Number;
let tiempoTotal: Number;
let tiempoVueltaPromedio: Number;
btnEnviar.addEventListener("click", () => {
  vuelta1 = Number(dato1.value);
  vuelta2 = Number(dato2.value);
  vuelta3 = Number(dato3.value);
  vuelta4 = Number(dato4.value);
  tiempoTotal = vuelta1 + vuelta2 + vuelta3 + vuelta4;
  tiempoVueltaPromedio = tiempoTotal / 4;
  console.log("El tiempo total es:" + tiempoTotal);
  console.log("El tiempo promedio de vuelta es:" + tiempoVueltaPromedio);
});
