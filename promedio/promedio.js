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
  lista.sort(function(elementoUno, elementoDos) {
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

function calcularModa(lista) {
  const contador = {};
  lista.map(function(elemento) {
    if (!contador[elemento]) {
      contador[elemento] = 1;
    } else {
      contador[elemento] += 1;
    }
  });
  const listaContadores = Object.entries(contador).sort(function (elementoUno, elementoDos) {
    return (elementoUno[1] - elementoDos[1]);
  });
  return parseInt(listaContadores[listaContadores.length - 1][0]);
}

function calcularPromedioCuadratico(lista) {
  const listaCuadratica = lista.map(function (elementoActual) {
    return elementoActual ** 2;
  });
  const sumatoria = listaCuadratica.reduce(function (acumulador = 0, elemento) {
    return acumulador + elemento;
  });

  return Math.sqrt(sumatoria / lista.length);
}