x = 1;
//console.log(x)=1; Este me da uno por la ubicacion, lee el de arriva antes que el de abajo, por la propiedad de js
var a = 5; //hablo de valores cuando tengo variables
//console.log(a) =5; de nuevo igual que x por su posicion
var b = 10;
var c = function (a, b, c) {
  //console.log(a) est da 8 con lo cual lo que lee mas abajo corresponde a la funcion. se llama igual al de arriba pero no es el mismoa, este esta en la funciony ocupa otro lugar n la memoria? cuando los marco no se marcan los a de arriba
  var x = 10;
  console.log(x); // lee el de arriba  por la propiedad que vba eliminando lo que va pasando sin usar?
  console.log(a); //esto lo vi arriba la diferencia entre un a dentro de la funcion y el a de la variable
  var f = function (a, b, c) {
    b = a; //referencia para arrays y objetos, miran hacia la misma ubicacion de memoria
    console.log(a); // a =b aca y tenemos a de la funcion declarada
    b = c; //referencia
    console.log(c); // es igual a =10 por que es referencia no valor
    var x = 5;
    //console.log(x); //porque esta dentro de esta funcion el var, igualmente yo tenia entendido de que se comprotaba global el var
  };
  f(a, b, c);
  console.log(a, b, c);
  console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x); // busca la x global
