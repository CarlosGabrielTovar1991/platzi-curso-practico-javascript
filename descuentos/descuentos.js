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

function onClickButtonPriceDiscountCoupon() {
  const inputPrice = document.getElementById("InputPriceCoupon");
  const inputPriceValue = inputPrice.value
  const inputDiscount = document.getElementById("InputDiscountCoupon");
  const inputDiscountPriceValue = inputDiscount.value;
  const resultPriceCoupon = document.getElementById("ResultPriceCoupon");

  const precioConDescuento = calcularDescuento(inputPriceValue, inputDiscountPriceValue);
  const messageCoupon = inputDiscountPriceValue <= 0 ? "No has seleccionado ningún cupón" : `Has seleccionado un cupón del ${inputDiscountPriceValue}% de descuento`;
  resultPriceCoupon.innerText = `Tu precio es de ${inputPriceValue}\n${messageCoupon}\nEl precio con descuento a pagar es de $${precioConDescuento}`;
}