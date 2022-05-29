// Obtener y ordenar los salarios del archivo de Colombia
const salariosColombia = colombia.map(function (persona) {
  return persona.salary;
}).sort(function (valorUno, valorDos) {
  return valorUno - valorDos;
});

// Comprobar si un valor es par
function esPar(valor) {
  return (valor % 2 === 0);
}

// Calcular la media aritmética
function calcularMediaAritmetica(lista = null) {
  if (!Array.isArray(lista)) {
    console.error("No se puede calcular la media aritmética: el parametro recibido no es una lista");
    return 0;
  }
  const cantidadElementos = lista.length;
  if (cantidadElementos <= 0) {
    console.error("No se puede calcular la media aritmética: la lista de elementos está vacía.")
    return 0;
  }
  const sumaElementos = lista.reduce(
    function (valorAcumulado = 0, elementoActual) {
      return (valorAcumulado + elementoActual)
    }
  );
  return sumaElementos / cantidadElementos;
}

// Calcular la mediana general de salarios
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);
  if (esPar(lista.length)) {
    return calcularMediaAritmetica([lista[mitad -1], lista[mitad]]);
  } else {
    return lista[mitad];
  }
}
const medianaGeneralSalariosColombia = medianaSalarios(salariosColombia);

// Calcular la mediana del 10% de los salarios
const spliceStart = (salariosColombia.length * (90)) / 100;
const spliceCount = salariosColombia.length - spliceStart;
const salariosColombiaTop = salariosColombia.splice(spliceStart, spliceCount);
const medianaTopSalariosColombia = medianaSalarios(salariosColombiaTop);

console.group('Salarios en Colombia');
console.log(`Mediana de salarios en Colombia: ${medianaGeneralSalariosColombia}`);
console.log(`Mediana del top 10 salarios en Colombia: ${medianaTopSalariosColombia}`);
console.groupEnd();