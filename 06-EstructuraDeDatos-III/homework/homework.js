"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (!this.left) {
      //si value es menor que el this value, y si no hay NADA a la izquierda el puntero apunta a null entonces
      let myTree = new BinarySearchTree(value); // entonces instancio la clase con el parametro recibido inicialmente, una

      //vez que tenemos la instancia, osea que my Tree tiene todas propiedas y metodos de < binary class="" ></binary >
      this.left = myTree; // ahora le decimos a this left tiene como referencia el nuevo nodo myTree.
    } else {
      // si ese lado esta disponible, si no lo esta debemos realizar RECURSION, la recursion la debemos aplicar al nodo izquierdo
      this.left.insert(value);
    }
    //recursion para que se genere oro contexto y realiza del analisis correindose de NODO
  } else {
    if (!this.right) {
      let myTree = new BinarySearchTree(value);
      this.right = myTree;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.size = function () {
  //caso base---> cuando sea null
  if (!this.left && !this.right) return 1;
  // cuando nuestro arbol tiene un solo hijo
  if (!this.right) return 1 + this.left.size();
  if (!this.left) return 1 + this.right.size();
  // cuando nuestro arbol tiene dos hijos  uno a la der y otro a la izq.
  return 1 + this.left.size() + this.right.size();
};

BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) return true; //caso cero
  // cuando mi
  //valor es el igual al del padre
  if (value < this.value) {
    if (!this.left) return false;
    return this.left.contains(value);
  }
  if (value > this.value) {
    if (!this.right) return false;
    return this.right.contains(value);
  }
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, recorrido) {
  // btv.melezinek.cz/binary-search-tree.html
  // nodo izquierdo -> nodo padre---> nodo derecho
  if (recorrido === "in-order" || !recorrido) {
    if (this.left && this.left.depthFirstForEach(cb, recorrido)); //Nodo izquierdo
    cb(this.value); // nodo padre
    if (this.right && this.right.depthFirstForEach(cb, recorrido)); //Nodo derecho
  }
  // nodo izquierdo -> nodo padre---> nodo derecho
  if (recorrido === "pre-order") {
    cb(this.value); // nodo padre
    if (this.left && this.left.depthFirstForEach(cb, recorrido)); //Nodo izquierdo
    if (this.right && this.right.depthFirstForEach(cb, recorrido)); //Nodo derecho
  }
  // nodo izquierdo -> nodo derecho---> nodo padre
  if (recorrido === "post-order") {
    if (this.left && this.left.depthFirstForEach(cb, recorrido)); //Nodo izquierdo
    if (this.right && this.right.depthFirstForEach(cb, recorrido)); //Nodo derecho
    cb(this.value); // nodo padre
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr) {
  if (!arr)
    //le decimos que si no existe el arr lo cree y lo agregue como valor que le ingresara a la funcion
    var arr = [];
  cb(this.value);
  this.left && arr.push(this.left); // se pushean en el
  //cb
  this.right && arr.push(this.right);
  arr.length && arr.shift().breadthFirstForEach(cb, arr);
  //si tiene longitud ese array saca el nodo con el shif y lo retorna al cb
};

// tree.insert(12);
// tree.insert(22);
// tree.size();
// console.log(tree.size());
// console.log(tree.left.value());

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
