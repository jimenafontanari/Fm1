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
  // this.length = 0; //opcional
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  var nodo = new Node(value);

  //lista vacia
  if (!this.head) {
    this.head = nodo;
  }

  //lista no vacia
  else {
    var current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = nodo;
  }
};

LinkedList.prototype.remove = function () {
  //lista vacia
  if (!this.head) return null;

  //lista tiene un nodo
  var current = this.head;

  if (!current.next) {
    var nodeValue = current.value;
    this.head = null;
  }

  //lista tiene más de un nodo
  else {
    while (current.next.next) {
      current = current.next;
    }
    var nodeValue = current.next.value;
    current.next = null;
  }
  return nodeValue;
};

LinkedList.prototype.search = function (algunaCosa) {
  //lista vacia
  if (!this.head) return null;

  //lista no vacia
  var current = this.head;

  while (current) {
    if (typeof algunaCosa === "function") {
      if (algunaCosa(current.value)) return current.value;
    }

    if (algunaCosa === current.value) return current.value;
    else {
      current = current.next;
    }
  }

  return null;
};

//ejemplo
// var lista1 = new LinkedList();
// lista1.add(9);
// lista1.add(5);
// lista1.add(4);
// lista1.add(8);

// lista1.remove();
// lista1.remove();

// console.log(lista1.search(9));
// console.log(lista1.search(1));

// console.log(lista1);

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
function HashTable() {
  this.buckets = [];
  this.numBuckets = 35;
}

HashTable.prototype.hash = function (key) {
  //'hola' --> 'h' + 'o' + 'l' + 'a' --> total % 35
  var total = 0;

  for (var i = 0; i < key.length; i++) {
    total += key[i].charCodeAt();
  }

  return total % this.numBuckets; //0 - 34
};

HashTable.prototype.set = function (key, value) {
  // [{foobar: value1}]

  if (typeof key !== "string") throw new TypeError("Keys must be strings");

  var index = this.hash(key);

  if (!this.buckets[index]) {
    this.buckets[index] = {};
  }

  this.buckets[index][key] = value;
};

HashTable.prototype.get = function (key) {
  var index = this.hash(key);

  return this.buckets[index][key];
};

HashTable.prototype.hasKey = function (key) {
  // return this.buckets.some(x => x.hasOwnProperty(key));

  var index = this.hash(key);
  return this.buckets[index].hasOwnProperty(key);
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
