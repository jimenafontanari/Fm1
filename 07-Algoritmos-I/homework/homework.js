"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  const factores = [1];

  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      factores.push(i);
      num = num / i;
    }
  }

  return factores;
}

const num = 180;
const factores = factorear(num);
console.log(factores); // Esto imprimirá [2, 2, 3, 3, 5]
// nicializa una variable factores como un array vacío para almacenar los factores.

// Crea un bucle for que iterará desde 2 hasta el valor de num. Esto nos permitirá encontrar todos los factores.

// Dentro del bucle, verifica si num es divisible por el valor actual del índice del bucle. Si es divisible, agrega ese valor al array factores y divide num por ese valor tantas veces como sea posible.

// Finalmente, después de que el bucle haya terminado, verifica si num es mayor que 1. Si es mayor que 1, agrega el valor restante a factores. COMO ME PEDIA EL NUMERO UNO Y ESTE NO SE PUEDE CALCCULAR SE AGREGA DENTRO DEL FACTORES QUE RECIBIRIA EN BLANCO Y ES LO QUE SE RETORNA

// opcion 2
// var factores1 = [1];
// var factor = 2;

// while (num > 1) {
//   if (num % factor === 0) {
//     factores1.push(factor);
//     num = num / factor;
//   } else {
//     factor++;
//   }
// }

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código://doble for anidado.
  // recordar usar en los fort las modificaciones en el length y no olvidar cambiar el contador de letra. j++, lo que hace el if es comparar que j sea mayor a j +1 que es la posicion siguiente. si es mayor genera la variablem temporal para guardarlo y lo piso con la linea 21 luego lo coloca el la linea pisada.
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temPoral = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temPoral;
      }
    }
  }
  return array;
}
const mArray = [5, 1, 4, 2, 8];
const bublee = bubbleSort(mArray);
console.log(bublee);

//function insertionSort(array) {
// Implementar el método conocido como insertionSort para ordenar de menor a mayor
// el array recibido como parámetro utilizando arreglos
// Devolver el array ordenado resultante
// Tu código:
///[5, 1, 4, 2, 8];
//       i
//    j
/// definir primer puntero i
//luego definir segundo puntero j>0
// for (let i = 1; i < array.length; i++) {
//   let j = i - 1;
//   // una posicion siempre de la de i atras.
//   let aux = array[i];
//   // el metodo agarra un valor lo saca y lo compara para esto arma este auxiliar y saca el valor NO LA POSICION y lo saca para compar que es lo que neecesita hacer el metodo
//   while (j >= 0 && aux < [j]) {
//     // tiene que ser mayor a 0 ya que es posicion no puede ser negativo, y ademas se tiene que cumplir el auxiliar para que haya cambio, que debe ser menor a jque es el condicional de la reordenamiento de menor a mayor/.que pasa si j es positivo y me da true y  chequea la segunda y si es true entra al while, entonces lo cambia con lo que sigue.SI ME DA FALSE EL WILE, SUBE NUEVAMENTE AL FOR PORQUE SALE DEL WHIALE, OSEA NO CAMBIA NADA, Y vUELVE AL FOR PARA INCREMENTAR EL I EN 1. si me da uno si y el otro no tambien se va al for.
//     array[j + 1] = array[j];
//     // aca lo que hace es que al ser verdadero el while j toma el valor de la posicion de j+1 . y lo pisa, pero el valor de i queda guardado en aux, que debe ser comparado nuevamente por el while, y por en de necesitamos que j retroceda nuevamente por eso:
//     j--;
//   }
//   array[j + 1] = aux;
//   // acac llega al final donde no puede retroceder mas j, entonces le devuelve el valor que saco de la compracion  que dijimos quedaba guardado en auxiliar.
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let currentElement = array[i];
    while (j >= 0 && currentElement < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currentElement;
  }
  return array;
}
const Aray = [10, -2, -7, 4];
const sArray = insertionSort(Aray);
console.log(sArray); // Esto imprimirá [1, 2, 3, 4, 5]

// const ordenar = new insertionSort();
// ordenar[(5, 1, 4, 2, 8)];
// console.log(ordenar());

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      // Intercambiar el elemento mínimo con el elemento en la posición i
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
}

const myArray = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(myArray);
console.log(sortedArray); // Esto imprimirá [11, 12, 22, 25, 64]

//En esta implementación:

// Iteramos a través del array desde el inicio hasta el penúltimo elemento utilizando el bucle exterior for con la variable i.

// En cada iteración del bucle exterior, inicializamos minIndex como i, que es la posición del elemento actualmente considerado como el mínimo.

// Luego, iteramos desde i + 1 hasta el final del array con el bucle interior for con la variable j. Comparamos cada elemento con el elemento en minIndex y, si encontramos un elemento menor, actualizamos minIndex con la posición del nuevo elemento mínimo.

// Después de completar el bucle interior, si minIndex no es igual a i, significa que encontramos un elemento menor que el elemento en la posición i. En este caso, realizamos un intercambio de elementos para colocar el elemento mínimo en la posición i.

// Continuamos repitiendo este proceso hasta que todo el array esté ordenado.
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
