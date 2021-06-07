// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {}

function Node(value) {}

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo.
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta.
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {}

//Extra credit
//Implementa la clase Queues sin utilizar arrays!
/*
Utilicemos el mismo nodo de las linkedList para poder realizar nuestra Queue!
*/

/*
Ahora tenemos que implementar nuestra clase Queue.
Va a tener las siguientes propiedades:
head: Es el nodo donde vamos a guardar el primer valor.
tail: Es el nodo del final de la Queue.
length: Un integer con el valor del largo de la Queue.
Va a tener los siguientes metodos:
enqueue: Debe agregar un nuevo nodo al final y retornar el largo de la queue.
dequeue: Debe eliminar un nodo y retornar el valor de ese nodo.

*/
function Queue() {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
	Node,
	Queue,
	LinkedList,
	HashTable,
};
