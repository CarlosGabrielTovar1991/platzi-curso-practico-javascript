const unidadMedida = 'cm';
const PI = Math.PI;

// Código del cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

function calcularPerimetroCuadrado() {
  const input = document.getElementById("input-lado-cuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(`El perímetro del cuadrado es ${perimetro}${unidadMedida}`);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("input-lado-cuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(`El área del cuadrado es ${area}${unidadMedida}²`);
}

// Código del triángulo
function perimetroTriangulo (ladoUno, ladoDos, base) {
  return ladoUno + ladoDos + base;
} 
function areaTriangulo (base, altura) {
  return  (base * altura) / 2;
}

function calcularPerimetroTriangulo() {
  const inputLadoUno = document.getElementById("input-lado-triangulo-uno");
  const valueLadoUno = inputLadoUno.value;
  const inputLadoDos = document.getElementById("input-lado-triangulo-dos");
  const valueLadoDos = inputLadoDos.value;
  const inputBase = document.getElementById("input-base-triangulo");
  const valueBase = inputBase.value;
  const perimetro = perimetroTriangulo(+valueLadoUno, +valueLadoDos, +valueBase);
  alert(`El perímetro del triangulo es ${perimetro}${unidadMedida}`);
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("input-base-triangulo");
  const valueBase = inputBase.value;
  const inputAltura = document.getElementById("input-altura-triangulo");
  const valueAltura = inputAltura.value;
  const area = areaTriangulo(valueBase, valueAltura);
  alert(`El área del triangulo es ${area}${unidadMedida}²`);
}

function calcularAlturaTrianguloIsosceles(lado, base) {
  return Math.sqrt((lado ** 2) - ((base ** 2) / 4));
}

function obtenerAlturaTrianguloIsosceles() {
  const inputLadoUno = document.getElementById("input-lado-triangulo-isosceles-uno");
  const valueLadoUno = inputLadoUno.value;
  const inputLadoDos = document.getElementById("input-lado-triangulo-isosceles-dos");
  const valueLadoDos = inputLadoDos.value;
  const inputBase = document.getElementById("input-base-triangulo-isosceles");
  const valueBase = inputBase.value;
  let altura = 0;
  if (valueLadoUno !== valueLadoDos) {
    alert("No se puede calcular la altura: el triángulo isósceles debe tener los lados iguales.");
  } else {
    altura = calcularAlturaTrianguloIsosceles(valueLadoUno, valueBase);
    alert(`La altura del triángulo isósceles es ${altura}`);
  }
}

// Código del círculo
function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return (radio * radio) * PI;
}

function calcularDiametroCirculo() {
  const inputRadio = document.getElementById("input-radio-circulo");
  const valueRadio = inputRadio.value;
  const diametro = diametroCirculo(valueRadio);
  alert(`El diámetro del circulo es ${diametro}${unidadMedida}`);
}

function calcularPerimetroCirculo() {
  const inputRadio = document.getElementById("input-radio-circulo");
  const valueRadio = inputRadio.value;
  const perimetro = perimetroCirculo(valueRadio);
  alert(`El perímetro del circulo es ${perimetro}${unidadMedida}`);
}

function calcularAreaCirculo() {
  const inputRadio = document.getElementById("input-radio-circulo");
  const valueRadio = inputRadio.value;
  const area = areaCirculo(valueRadio);
  alert(`El área del circulo es ${area}${unidadMedida}`);
}
