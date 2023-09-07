/////STACK PILA
function Stack() {
  this.array = [];

  Stack.prototype.push = function (value) {
    this.array.push(value);
  };
  Stack.prototype.pop = function () {
    return this.array.pop(value);
  };
}

var miStack = new Stack();
miStack.push(2);
console.log(new Stack());
