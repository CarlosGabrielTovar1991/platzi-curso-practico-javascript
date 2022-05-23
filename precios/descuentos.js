// const precioOriginal = 120;
// const descuento = 18;
// console.log ({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento
// })


function calcularDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return (precioConDescuento);
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const inputPriceValue = inputPrice.value
  const inputDiscount = document.getElementById("InputDiscount");
  const inputDiscountPriceValue = inputDiscount.value;
  const resultPrice = document.getElementById("ResultPrice");

  const precioConDescuento = calcularDescuento(inputPriceValue, inputDiscountPriceValue);
  resultPrice.innerText = `El precio con descuento a pagar es de $${precioConDescuento}`;
}