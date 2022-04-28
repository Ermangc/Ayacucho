let nombreAlumno = <HTMLInputElement> document.getElementById("nombreAlumno");
let notaPractica, notaTeoria, notaFinal, notaProblema;
let btnEnviar = <HTMLButtonElement> document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", () => {
  nombreAlumno = nombreAlumno.value;
  notaPractica = notaPractica.value;
  notaTeoria = notaTeoria.value;
  notaProblema = notaProblema.value;
  while(nombreAlumno <> "" || notaPractica <> "" || notaTeoria <> "" || notaProblema <> "") {
    if(notaPractica <=10 && notaPractica >= 0) && (notaTeoria <=10 && notaTeoria >= 0) && (notaProblema <=10 && notaProblema >=0) {
       notaFinal = notaPractica*0.1 + notaProblema*0.5 + notaTeoria*0.4;
       console,log("La nota final de ", nombreAlumno, "es: " + notaFinal)
    }else {
      console.log("Error notas ingresadas");
    }
    let nombreAlumno = prompt("Ingrese nombre del alumno");
  }
})

