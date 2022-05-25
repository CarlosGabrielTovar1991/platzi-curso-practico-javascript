const listaUno = [
  100,
  200,
  300,
  500
];

function calcularPromedio() {
  let sumaElementos = 0;
  let mediaAritmetica = 0;
  const cantidadElementos = listaUno.length;
  for(let iterador = 0; iterador < cantidadElementos; iterador++) {
    sumaElementos += listaUno[iterador];
  }
  mediaAritmetica = sumaElementos / cantidadElementos;
}