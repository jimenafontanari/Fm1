// x = 1;
// var a = 5;
// var b = 10;
// var c = function (a, b, c) {
//      x = 10;
//    console.log(x);//10
//    console.log(a);//8
//    var f = function (a, b, c) {
//       b = a;
//       console.log(b);//8
//       b = c;
//        x = 5;
//       var z = 13;
//    };
//    f(a, b, c);
//    console.log(b);//9
// //    console.log(z) //not defined
// };
// c(8, 9, 10);
// console.log(b);//10
// console.log(x);//1

// console.log(bar);//no existe - devuelve 1
// console.log(baz);//baz is not defined
// foo();
// function foo() {
//     console.log('Hola!');//Hola!
// }
// var bar = 1;
// var baz = 2;

// const instructor = [1,2,3];

// if (true) {
//    let instructor = 'Franco';
// }
// console.log(instructor);//'Franco'

// var instructor = 'Tony';
// console.log(instructor);//Tony
// (function () {
//    if (true) {
//       let instructor = 'Franco';
//       console.log(instructor);//'Franco'
//    }
// })();
// console.log(instructor);//Tony

// var instructor = 'Tony';
// let pm = 'Franco';
// if (true) {
//    var instructor = 'The Flash';
//     pm = 'Reverse Flash';
//    console.log(instructor);//the flash
//    console.log(pm);//reverse flash
// }
// console.log(instructor);//the flash
// console.log(pm);//franco

6 / "3"; //2 -> Javascript es quien convierte el string en número para realizar la operación
"2" * "3"; //6
4 + 5 + "px"; //9px
"$" + 4 + 5; //$45
"4" - 2; // 2
"4px" - 2; //NaN
7 / 0; //Infinity
{
}
[0]; //undefined {}
parseInt("09"); //9 -> Devs con este método convierten un string a entero
Number("09"); // 9
Number("09abc"); // NaN
parseInt("09abc"); // 9
5 && 2; //2
6 && 3 && 8 && 9;
2 && 5; //5
5 || 0; //5
0 || 5; //5
5 || 6 || 9 || "hola" || (0)[3] + [3] - [10]; //23 -> '3' + '3' --> 33 - [10] --> '33' - '10' -> 33 - 10 -> 23
3 > 2 > 1; //false --- true
// [] === ![] //true

// function test() {
//     console.log(a); //undefined
//     console.log(foo());//2

//     var a = 1;
//     function foo() {
//        return 2;
//     }
//  }

//  test();

// var snack = 'Meow Mix';

// function getFood(food) {
//    if (food) {
//       var snack = 'Friskies';
//       return snack;
//    }
//    return snack;
// }

// console.log(getFood(false));

// var fullname = 'Juan Perez';
// var obj = {
//    fullname: 'Natalia Nerea',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function () {
//          return this.fullname;
//       },
//    },
// };

// console.log(obj.prop.getFullname()); //aurelio de Rosa

// var test = obj.prop.getFullname;

// console.log(test()); //undefined

function printing() {
  console.log(1); //1
  setTimeout(function () {
    console.log(2); //4
  }, 1000);
  setTimeout(function () {
    console.log(3); //2 -- 3
  }, 0);
  console.log(4); //2
}

printing();
