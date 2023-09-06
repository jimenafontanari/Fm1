"use strict";
// No cambies los nombres de las funciones.

// function quickSort(array) {
//   // Implementar el método conocido como quickSort para ordenar de menor a mayor
//   // el array recibido como parámetro
//   // Devolver el array ordenado resultante
//   // Tu código:

//   if (array.length < 2) return array;

//   const pivotIndex = Math.floor(Math.random() * array.length);
//   const pivot = array[pivotIndex];

//   const left = array.filter((el, index) => index !== pivotIndex && el < pivot);
//   const right = array.filter(
//     (el, index) => index !== pivotIndex && el >= pivot
//   );

//   const sortedLeft = quickSort(left);
//   const sortedRight = quickSort(right);

//   return [...sortedLeft, pivot, ...sortedRight];
// }

// // Ejemplo de uso:
// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// const sortedArr = quickSort(arr);
// console.log(sortedArr);

function quickSort(array) {
  if (array.length < 2) return array;

  // Elegir un elemento pivote al azar la multiplicación por array.length se realiza para obtener un número aleatorio que represente un índice válido dentro del array, de modo que el pivote se seleccione aleatoriamente de entre los elementos del array.
  // Math.random(): Math.random() es una función en JavaScript que genera un número decimal pseudoaleatorio en el rango [0, 1), lo que significa que puede ser igual o mayor que 0 pero siempre menor que 1.

  // Math.floor(): Math.floor() es una función que redondea hacia abajo un número decimal al número entero más cercano. Esto asegura que obtengas un índice válido dentro del rango del array.

  // array.length: array.length es la longitud (cantidad de elementos) del array original array. Se utiliza aquí para asegurarse de que el índice generado esté dentro del rango válido para el array.

  const pivotIndex = Math.floor(Math.random() * array.length);
  const pivot = array[pivotIndex];

  // Dividir el array en dos subarrays: menores y mayores que el pivote
  const left = [];
  const right = [];
  //
  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue; // Saltar el pivote
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  // Recursivamente ordenar los subarrays y luego combinarlos
  const arrayLeft = quickSort(left);
  const arrayRight = quickSort(right);

  // Concatenar los subarrays ordenados junto con el pivote en el medio
  return arrayLeft.concat(pivot, arrayRight);
}

// Ejemplo de uso:
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArr = quickSort(arr);
console.log(sortedArr);
//if (array.length === 1 || array.length === 0) {
// si el array posee 1 elemento...
//     return array;
//   }
// // lisandro desarrollo
// if (array.length > 1) {
//   // si el array tiene 2 elementos o más
//   var pivote = array[0]; // seleccionamos el primer elemento del array como pivote
//   var array_pivote = [pivote]; // guardamos el pivote en un nuevo arreglo (central)
//   var array_derecha = []; // arreglo para mayores al pivote
//   var array_izquierda = []; // arreglo para menores al pivote

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] >= pivote) {
//       array_derecha.push(array[i]);
//     }

//     if (array[i] < pivote) {
//       array_izquierda.push(array[i]);
//     }
//   }

//   return quickSort(array_izquierda).concat(
//     quickSort(array_pivote),
//     quickSort(array_derecha)
//   );
// }
function mergeSort(array) {
  //[9,7,3,1,5,2,6]
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //okey probemos ahora
  if (array.length < 2) return array; // define el caso de cierre que debe
  //ser menor a 1 para que sea valido cuando, tenga un elemento en el
  //array se termina la recurion,
  const mitad = Math.floor(array.length / 2); //defino desde donde y hasta
  //donde se coratar el arrayy que a su vez con el math floor le digo que
  //redondee.en este caso es =3
  let left = array.slice(0, mitad); //aca son el slice le que me separe
  //el grupo de la izquierada desde HashChangeEvent, fijarse que toma el
  //mitad //pero no lo incluye[9,7,3]
  let rigth = array.slice(mitad, array.length); // aca al reves  le digo //
  //que arme un subgrupo con el slice desde hasta.[1, 5, 2, 6]
  // ahora antes de realizar la recursion, pongo el array vacio, ya que al sudividirlo lo vamos a vaciar y para que no quede ocupando espacio en la memoria lo usamos.
  array = []; // aca vamos a pushear lo que nos va dando las recursiones.[7,3,9]
  //despues si hacemos ya la recursion
  left = mergeSort(left); //recursion de [ 9]
  rigth = mergeSort(rigth); //recursion de[7,3]
  // hasta que encuentre el tope o condicion va realizar la recursion
  // uso el while para ponerle o fijarle las consiciones
  while (left.length && rigth.length)
    //mientras que los arrays sean>1,
    //osea tengo entre que comparar.
    // debo comparar indices ceros
    if (left[0] < rigth[0]) {
      // compra los indices ceros de u l derecha y
      //la izquierda.
      array.push(left.shift()); //lo saco y lo pusheo.
    } else array.push(rigth.shift()); // lo mismo del otro lado
  // ahora debo concatenar y retornar el array

  array = array.concat(left, rigth);
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
