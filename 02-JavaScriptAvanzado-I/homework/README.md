# JavaScript Avanzado I: homework

### **Temas de la clase**

- Scope
- Hoisting
- Coerción de datos
- Contexto de ejecución & entorno léxico
- Event loop
- _this_

ㅤ

### **Objetivo**

Mediante estos ejercicios podrás experimentar con los conceptos aprendidos en clase, entendiendo, de primera mano y con ejemplos prácticos, cómo una computadora interpreta y ejecuta código escrito en JavaScript, y cómo conviene escribirlo teniendo en cuenta esas características.

ㅤ

### **Duración estimada**

90 minutos

ㅤ

### **Instrucciones preliminares**

Como tal vez hayas notado, esta homework no tiene tests.  
Para resolverla, simplemente lee cada ejercicio intentando anticipar qué ocurriría al ejecutar ese código.

ㅤ

<hr/>

## **Descripción**

Lee detenidamente cada uno de los siguientes ejercicios, tomando lo visto en clase como punto de partida para comprender cómo funcionaría el código en cada caso.  
Hoy no te toca escribir código, sino leerlo. Busca entender, no sólo cómo funcionaría lo que ves escrito, sino también por qué funcionaría así, cómo podrías modificarlo y qué impacto tendrían tus modificaciones en el resultado obtenido.  
¿Dónde y cómo (con qué palabra) están declaradas las variables? ¿En qué orden se ejecutan las operaciones? ¿Cuál es el scope de cada función? ¿A qué hace referencia _this_ en un contexto puntual?  
**Es importante que**, en una primera instancia, **busques imaginar el resultado del código sin ejecutarlo**. Luego de tomarte tu tiempo para pensarlo, puedes tomar cada bloque y correrlo - en la terminal de NodeJS o en la del navegador - para comprobar tu razonamiento. ¿Estabas en lo cierto? ¿Resultó algo inesperado? ¿Puedes identificar por qué?  
Recuerda que puedes repasar la clase, hacer tus propias pruebas - modificando el código y observando qué cambia, y conversar con tus compañeros y compañeras para intercambiar ideas.

ㅤ

### Ejercicio 1: Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

#### Bloque A

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function (a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x);
```

#### Bloque B

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() {
  console.log("Hola!");
}
var bar = 1;
baz = 2;
```

#### Bloque C

```javascript
var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor);
```

#### Bloque D

```javascript
var instructor = "Tony";
console.log(instructor);
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor);
  }
})();
console.log(instructor);
```

#### Bloque E

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor);
  console.log(pm);
}
console.log(instructor);
console.log(pm);
```

ㅤ

### Ejercicio 2: Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de cada una de estas operaciones?  
_Cada línea es independiente_

```javascript
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
{}[0]
parseInt("09")
5 && 2
2 && 5
5 || 0
0 || 5
[3]+[3]-[10]
3>2>1
[] == ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

ㅤ

### Ejercicio 3: Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

#### Bloque A

```javascript
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
```

#### Bloque B

```javascript
var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack;
}

getFood(false);
```

ㅤ

### Ejercicio 4: _this_

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```

ㅤ

### Ejercicio 5: Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

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

<hr/>

ㅤ

### **Recuerda que...**

- El orden en el que se ejecutan las operaciones en una misma línea está determinado por la **precedencia** y la **asociatividad**.
- Una variable puede estar o no en el **scope** de un determinado **contexto de ejecución**, según la manera y el lugar en que fue declarada.
- JavaScript es un lenguaje flexible y dinámico, pero su interpretación y ejecución están sujetas a la forma en que escribimos el código.
