var bar = 1; //la subi para que la tome
console.log(bar); //la llama antes de definirla por eso de =undefine
console.log(baz); // baz is not
foo();
console.log("TTT");
function foo() {
  console.log("Hola!");
}
//var bar = 1; //este va arriba
baz = 2;

// el hoisting lo sube pero no lo interpreta completo
```javascript
function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

printing();
```

</br >