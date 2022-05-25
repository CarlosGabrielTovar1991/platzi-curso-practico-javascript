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