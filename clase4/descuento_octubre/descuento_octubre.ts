let amount = <HTMLInputElement>document.getElementById("amount");
let quantity = <HTMLInputElement>document.getElementById("quantity");
let mounth = <HTMLInputElement>document.getElementById("mounth");
let btnSend = <HTMLButtonElement>document.getElementById("btnSend");

amount: Number = amount.value;
quantity: Number = quantity.value;
mounth: String = mounth.value;;
let totalPrice = amount * quantity);
let discount = (amount * quantity) * 0.15;
let priceOctober = totalPrice - discount;

btnSend.addEventListener("click", () => {
  if (mounth === OCTUBRE){
    console.log("aplica descuento octubre del 15% descuento, el monto a pagar es de " + priceOctober);
  } else{
    console.log("El descuento es solo para mes de octubre, el monto a pagar es de " + totalPrice);
  }
})