const password = "eureka";
let numberAttemps = 1;
let passwordEntered : string | null ;
let correctPassword : boolean = false;

while (correctPassword === false && numberAttemps > 0) {
  passwordEntered = prompt(`introduzca la contraseña. Le quedan ${numberAttemps} intentos`);
  if (passwordEntered === password){
    correctPassword = true;
    console.log("contraseña correcta");
  }
  attemps--;
}
if(numberAttemps <= 0)