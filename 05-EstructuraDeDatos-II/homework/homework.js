"use strict";

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  var newNodo = new Node(value); // crea la nueva instancia de la clase node con el value que le proporciona y luego se enlaza

  if (!this.head) {
    this.head = newNodo;
    return value;
  }
  let current = this.head;
  while (current.next) {
    current = current.next;
  }
  current.next = newNodo;
};
LinkedList.prototype.search = function (target) {
  let current = this.head;
  while (current) {
    if (typeof target === `function`) {
      if (target(current.value)) {
        return current.value;
      }
    } else if (current.value === target) {
      return current.value;
    }
    current = current.next;
  }
  return null;
};

LinkedList.prototype.remove = function () {
  if (!this.head) {
    return null; // Lista vacía, no se puede eliminar nada
  }

  let removedData;
  if (!this.head.next) {
    // Lista con un solo nodo
    removedData = this.head.value;
    this.head = null;
  } else {
    // Lista con más de un nodo
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    removedData = current.next.value;
    current.next = null;
  }

  return removedData;
};

const linkedList = new LinkedList();
linkedList.add("one");
linkedList.add("two");
linkedList.add("three");
linkedList.add("four");
linkedList.add("3");
console.log(linkedList);

console.log(linkedList.search("two")); // Output: 'two'
console.log(linkedList.search("sdd")); // Output: null
console.log(linkedList.search("one")); // Output: 'one'
console.log(linkedList.search("four")); // Output: 'four'
console.log(linkedList.search("3"));

console.log(linkedList.remove("two")); // Output: 'two'
console.log(linkedList.remove("sdd")); // Output: null
console.log(linkedList.remove("one")); // Output: 'one'
console.log(linkedList.remove("four")); // Output: 'four'
console.log(linkedList.remove("3"));

//El método remove primero verifica si la lista está vacía. Si lo está, retorna null porque no hay nada que eliminar. Luego, maneja el caso en que la lista tiene un solo nodo y el caso en que tiene más de un nodo. Si la lista tiene un solo nodo, se elimina ese nodo y se actualiza la cabeza de la lista. Si la lista tiene más de un nodo, se recorre la lista hasta el penúltimo nodo y se elimina la referencia al último nodo.

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable(numBuckets) {
  this.numBuckets = numBuckets || 35;
  this.buckets = new Array(this.numBuckets);
  for (let i = 0; i < this.numBuckets; i++) {
    this.buckets[i] = {};
  }
}

HashTable.prototype.hash = function (key) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  return total % this.numBuckets;
};

HashTable.prototype.set = function (key, value) {
  if (typeof key !== "string") throw TypeError("Keys must be strings");

  const index = this.hash(key);
  this.buckets[index][key] = value;
};

HashTable.prototype.get = function (key) {
  if (typeof key !== "string") {
    throw new Error("Keys must be strings.");
  }

  const index = this.hash(key);
  return this.buckets[index][key];
};

HashTable.prototype.hasKey = function (key) {
  if (typeof key !== "string") {
    throw new Error("Keys must be strings.");
  }

  const index = this.hash(key);
  return this.buckets[index].hasOwnProperty(key);
};

// Ejemplo de manejo de colisiones
const hashTable = new HashTable();
hashTable.set("instructora", "Ani");
hashTable.set("in", "Collisions");
console.log(hashTable);
console.log(hashTable.get("instructora")); // Output: 'Ani'
console.log(hashTable.get("in")); // Output: 'Collisions'

// Ejemplo de uso de hasKey
console.log(hashTable.hasKey("instructora")); // Output: true
console.log(hashTable.hasKey("otro")); // Output: false

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
