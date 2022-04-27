let password = "eureka";
let numberAttemps = 1;
let passwordEntered : string;
while (numberAttemps <= 3 && password =! passwordEntered){
  passwordEntered = prompt("introduzca la contraseña");
  attemps ++;
}
if(password = "eureka"){
  console.log("contraseña correcta");
}else {
  console.log("ya no tiene mas intentos")
}