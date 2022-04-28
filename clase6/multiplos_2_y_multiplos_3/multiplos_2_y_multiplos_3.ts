const primerDivisor: number = 2;
const segundoDivisor: number = 3;
const cotaInferior: number = 1;
const cotaSuperior: number = 100;

let esMultiploDeDos: boolean;
let esMultiploDeTres: boolean;
let multiplos: string = "";

for (let i = cotaInferior; i <= cotaSuperior; i++) {
  esMultiploDeDos = i % 2 === 0;
  esMultiploDeTres = i % 3 === 0;
  if (esMultiploDeDos || esMultiploDeTres) {
    multiplos += ` ${i}`;
  }
}
console.log(
  "los multiplos entre ",
  +cotaInferior + "y" + cotaSuperior + "son: " + multiplos
);
