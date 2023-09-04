"use strict";

// Closures

/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */
function counter() {
  /*
  1. Retornar otra función
  2. La función counter debe ir llevando un contador
  3. el contador debe iniciar en 1
  4. Con cada invocación contador incrementa
  */
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

// let contador = counter()

// console.log(contador());
// console.log(contador());
// console.log(contador());
// console.log(contador());
// console.log(contador());
// console.log(contador());
// console.log(contador());

// function mascotas(nombre){
//   return function(tipo){
//     // return 'Tu mascota es un ' + tipo + ' y se llama ' + nombre
//     return `Tu mascota es un ${tipo} y se llama ${nombre}`
//   }
// }

// const kitty = mascotas('kitty')
// console.log(kitty('gatico'));

/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) */

function square(n) {
  return n * n;
}

function cacheFunction(cb) {
  /*
    1. retornar una función anónima
    2. función anónima recibe el parámetro arg
    3. Dentro de función anónima invoco a cb pasando por argumento el parámetro arg
    4. Guardar resultado en un objeto
    5. La clave del objeto sería el arg
    6. El valor el resultado de la invocación de cb
    7. Si existe la propiedad, retornar directamente el resultado
    8. Si no existe esa propiedad, hacer el cálculo, guardarlo y retornar el resultado.
  */
  let cache = {};

  return function (arg) {
    if (cache.hasOwnProperty(arg)) return cache[arg];
    return (cache[arg] = cb(arg));
  };
}

console.log(cacheFunction(square));

const caches = cacheFunction(square);

// console.log(caches(5));
// console.log(caches(3));
// console.log(caches(5));
//----------------------------------------

// Bind

var instructor = {
  nombre: "Franco",
  edad: 25,
};

var alumno = {
  nombre: "Juan",
  curso: "FullStack",
};

function getNombre() {
  return this.nombre;
}

/*
  Ejercicio 3
  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);

/*
  Ejercicio 4
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(null, "*", "*");
let textoGuiones = crearCadena.bind(this, "-", "-");
let textoUnderscore = crearCadena.bind(this, "_", "_");

console.log(textoAsteriscos("Lisandro"));
console.log(textoGuiones("Lisandro"));
console.log(textoUnderscore("Lisandro"));

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
