let actualySalary = <HTMLInputElement>document.getElementById("salary");
let newSalary: number;
let btnSend = <HTMLButtonElement>document.getElementById("btnSend");

btnSend.addEventListener("click", () => {
  actualySalary = actualySalary.value;
  if (0 < actualySalary && actualySalary <= 15000) {
    newSalary = actualySalary * 1.2;
    console.log(
      "Usted tuvo un aumento del 20%, Su nuevo sueldo es: $" + newSalary
    );
  } else if (15001 < actualySalary && actualySalary <= 20000) {
    newSalary = actualySalary * 1.1;
    console.log(
      "Usted tuvo un aumento del 10%, Su nuevo sueldo es: $" + newSalary
    );
  } else if (20001 < actualySalary && actualySalary <= 25000) {
    newSalary = actualySalary * 1.05;
    console.log(
      "Usted tuvo un aumento del 5%, Su nuevo sueldo es: $" + newSalary
    );
  } else if (25000 < actualySalary) {
    newSalary = actualySalary;
    console.log("Usted no tiene aumento");
  }
});
