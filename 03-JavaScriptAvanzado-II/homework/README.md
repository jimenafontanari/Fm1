# JavaScript Avanzado II: homework

## **Temas de la clase**

- Clausuras o closures
- Keyword “this”
- Métodos de funciones

ㅤ

### **Objetivo**

Al finalizar esta tarea entenderás el funcionamiento de una “closure” en las funciones de Javascript,  
y cómo redireccionar correctamente el keyword “this”.

ㅤ

### **Duración estimada**

45 minutos

ㅤ

### **Instrucciones preliminares**

Para poder ejecutar los test de esta tarea es necesario que nos ubiquemos  
dentro de la carpeta **_homework_** utilizando el comando `cd + nombreCarpeta`.

Cuando estés allí, debes ejecutar el comando `npm install` o `npm i`

Listo! Ya puedes correr los test con el comando `npm test`

ㅤ

## **Descripción**

Tendremos 4 ejercicios para resolver. Dos de ellos acerca de clausuras y  
otros dos donde deberás usar el método bind.
En el archivo `homework.js` se encuentran predefinidas las funciones y recursos necesarios para la tarea.

ㅤ

### **Recuerda que...**

El bind te servirá cuando el this no se comporte como quieres, o no tome del todo la referencia que esperabas,  
ahora que sabes como redireccionarlo, puedes darle uso.

Con clausuras / closures puedes acceder a valores de una función que ya terminó de ejecutarse, esto te  
permite “hacer privados” ciertos datos, ya que solo podrás accederlos desde la función retornada.

ㅤ

### **Recursos adicionales**

[Documentación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) método bind

<hr>

## **Extra credit**

### Repeatify

Crear un método `repeatify` que este disponible para _todos_ los objetos `Strings`. Esta función debe aceptar un `entero` que indica cuantas veces el string tiene que repetirse. La función retorna el string repetido el número de veces que indicamos. Controlar que el número no sea menor que cero, y si es cero que devuelva `''` (String vacío).

```javascript
console.log("hola".repeatify(3)); //holaholahola
```

### Shapes

- Crea un objeto llamado `shape` que tenga una propiedad `type` y un método `getType`.
- Ahora defini una función `Triangle` cuyo prototipo sea `shape`. Los objetos creados con `Triangle` deberían tener tres propiedades: `a`, `b` y `c`. Que representan cada lado del triángulo. `type` debe ser `Triangle`.
- Agregá un nuevo método al prototipo llamado `getPerimeter`.

Probá tu solución con el siguiente código:

```javascript
> var t = new Triangle(1, 2, 3);
> t instanceof Triangle
// true
> Shape.prototype.isPrototypeOf(t);
// true
> t.getPerimeter();
// 6
> t.getType();
// "Triangle"
```

- Ahora creá un nuevo constructor que herede de `shape`, llamado `Circle`. Implementalo de tal modo que puedas calcular su perímetro en la función `getPerimeter`.

Probá tu solución con el siguiente código:

```javascript
> var c = new Circle(2);
> c instanceof Circle
// true
> Shape.prototype.isPrototypeOf(c);
// true
> c.getPerimeter();
// 12.566370614359172
> c.getType();
// "Circle"
```

- Creá una última `shape` llamada `Square`.
- Agregá el método `getArea` de todas las `shape`s.

ㅤ
