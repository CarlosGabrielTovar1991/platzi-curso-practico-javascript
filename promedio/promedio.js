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
  /* Solución con ciclo for */
  // let sumaElementos = 0;
  // for(let iterador = 0; iterador < cantidadElementos; iterador++) {
  //   sumaElementos += lista[iterador];
  // }

  /* Solución con función reduce de array */
  const sumaElementos = lista.reduce(
    function (valorAcumulado = 0, elementoActual) {
      return (valorAcumulado + elementoActual)
    }
  );
  return sumaElementos / cantidadElementos;
}

function esPar(valor) {
  if (valor % 2 === 0) return true;
  return false;
}

function calcularMediana(listaParametro) {
  let mediana = null;
  const lista = [ ...listaParametro ];
  lista.sort((elementoUno, elementoDos) => {
    if (elementoUno < elementoDos) return -1;
    if (elementoUno > elementoDos) return 1;
    return 0;
  });
  const mitad = parseInt(lista.length / 2);
  if (esPar(lista.length)) {
    const elementoUno = lista[mitad - 1]
    const elementoDos = lista[mitad]
    mediana = calcularMediaAritmetica([ elementoUno, elementoDos]);
  } else {
    mediana = lista[mitad];
  }
  return mediana;
}