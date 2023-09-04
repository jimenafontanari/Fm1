"use strict";

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 
n =         0  1  2  3  4  5  6   7

Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if (n === 0 || n === 1) return 1;

  return n * nFactorial(n - 1);

  //iiterativa

  // if (n <= 0) {
  //   return n + ' no es un entero positivo distinto de 0';
  // }
  // var factorial = 1;
  // for (var i = 0; i <= n - 1; i++) {
  //   factorial = factorial * (n - i);
  // }

  // return factorial;
}

// nFactorial(2) = 2 * nFactorial(1) = 2 * 1 = 2
// nFactorial(3) = 3 * nFactorial(2) = 3 * 2 * nFactorial(1) = 3 * 2 * 1 = 6;

/* 
punto de corte:
0! = 1! = 1;

n = 2 --> 2! = 2 x 1 = 2;

n = 3 --> 3! = 3 x 2 x 1 = 3 x 2!

n = 4 --> 4! = 4 x 3 x 2 x 1 = 4 x 3!
...

n! = n x (n-1)!

(n-1)! = (n-1) x (n-2)!

*/

function nFibonacci(n) {
  if (n === 0 || n === 1) return n;

  return nFibonacci(n - 1) + nFibonacci(n - 2);

  //iterativo
  // let newArray = [0, 1];
  // let sumaFibonacci = function (a, b) {
  //   return a + b;
  // };
  // for (let i = 1; i < n; i++) {
  //   let suma = sumaFibonacci(newArray[i], newArray[i - 1]);
  //   newArray.push(suma);
  // }

  // return newArray[n];

  //iterativo2
  //   let fibonacci = [0, 1];
  //   for (let i = 2; i <= n; i++) {
  //     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  //   }
  //   return fibonacci[n];
  // }
}

// nFibonacci(2) = nFibonacci(1) + nFibonacci(0) = 1 + 0 = 1;
// nFibonacci(3) = nFibonacci(2) + nFibonacci(1) = 1 + 1 = 2;

/* 
puntos de corte:
0 --> 0
1 --> 1

nFibo(4) --> nFibo(3) + nFibo(2) = 2 + 1 = 3;

nFibo(3) --> nFibo(2) + nFibo(1) = 1 + 1 = 2;

nFibo(2) --> nFibo(1) + nFibo(0) = 1 + 0 = 1;

...

nFibo(n) --> nFibo(n-1) + nFibo(n-2);
*/

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (value) {
  this.array.push(value);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.size = function () {
  return this.array.length;
};

// class Queue {
//   constructor() {
//     this.array = [];
//   }
//   enqueue(num) {
//     this.array.push(num);
//   }
//   dequeue() {
//     return this.array.shift();
//   }
//   size() {
//     return this.array.length;
//   }
// }

// var queue1 = new Queue();

// queue1.enqueue(5);
// queue1.enqueue(8);
// queue1.enqueue(6);
// queue1.enqueue(9);

// console.log('size:', queue1.size());

// queue1.dequeue();
// queue1.dequeue();
// console.log('size:', queue1.size());

// queue1.dequeue();
// queue1.dequeue();
// console.log(queue1.dequeue());
// console.log(queue1);
// console.log('size:', queue1.size());

// Queue.prototype.prueba = function () {
//   console.log('hola soy la prueba');
// }

// queue1.prueba();

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
