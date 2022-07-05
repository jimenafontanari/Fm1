# Algoritmos I: homework

### **Temas de la clase**

- Pseudocódigo
- Algoritmos
- Complejidad - Big O Notation
- Bubble Sort
- Insertion Sort
- Selection Sort

ㅤ

### **Objetivo**

El objetivo de esta tarea es ejercitar la lógica a través de la implementación de los algoritmos de ordenamiento más conocidos, buscando desarrollar un método ordenado para la resolución de problemas que puedas aplicar a cualquier situación. Tendrás que identificar cada problema, trazar la solución en líneas generales, implementarla en código, ponerla a prueba, medir su complejidad y pulirla en caso de ser posible y necesario.

ㅤ

### **Duración estimada**

2 horas

ㅤ

### **Instrucciones preliminares**

1. Para poder ejecutar los tests de esta tarea es necesario que nos ubiquemos dentro de la carpeta homework. En la consola, corre el comando `cd` + nombre_de_la_carpeta
2. Cuando estés allí, instala las dependencias con el comando `npm install` o `npm i`
3. ¡Listo! Ya puedes correr los test con el comando `npm test`

ㅤ

<hr/>

## **Descripción**

Tu tarea será definir cuatro algoritmos. Cada uno deberá cumplir un objetivo específico, pero el procedimiento para construirlos es similar:

1. Comienza por entender el objetivo, los tipos de datos con los que estarás trabajando (inputs y outputs esperados), y las operaciones que se verán involucradas;
2. luego, define los pasos a seguir para alcanzar dicho objetivo, recordando contemplar casos límite - ej: ¿qué pasa si el input es 0?
3. Una vez tengas una solución planteada en pseudocódigo, puedes comenzar a expresarla en código JavaScript.
4. Cuando hayas logrado una solución que cumpla el objetivo y pase los tests, observa: ¿qué complejidad tiene tu algoritmo? ¿Podrías refactorearlo para hacerlo más eficiente? ¿Cómo?

ㅤ

### Ejercicio 1: factorear

Escribe un algoritmo que reciba un número y retorne un arreglo conteniendo todos los factores primos que lo componen.  
El parámetro recibido será de tipo `number`.  
El valor retornado será un arreglo de datos de tipo `number`.  
El 1 siempre se incluye en el arreglo de factores.

> Para factorear un número, lo representamos como un producto de todos los factores primos que lo componen. Ejemplo: 45 = 1 x 3 x 3 x 5

ㅤ  
A continuación una aproximación al pseudocódigo de este algoritmo, a modo de guía.

```
1. Empezamos intentando dividir el número por el mínimo divisor posible - en primera instancia, será 2.
    1A. Si el resto de la división es cero:
        a. almacenamos el divisor en una estructura apropiada (ej: un arreglo)
        b. tomamos el cociente de la división y buscamos dividirlo por el mismo divisor.
    1B. Si el resto es distinto de cero:
        a. incrementamos el divisor en 1. _Nota: recuerda que, una vez que incrementas el divisor, no puedes volver a decrementarlo._
        b. repetimos el proceso desde el punto 1, tomando como dividendo el cociente obtenido, y diviendolo por el nuevo divisor.
2. Repetimos el proceso almacenando cada divisor que arroje un resto 0, hasta llegar a una división cuyo cociente sea 1.
3. Por último, retornamos el conjunto de todos los divisores que fuimos almacenando.
```

ㅤ

### Ejercicio 2 bubbleSort

Implementa el algoritmo de ordenamiento Bubble Sort.
El parámetro recibido será un arreglo de elementos de tipo `number`.  
El valor retornado será un arreglo de datos un arreglo de elementos de tipo `number`.

ㅤ

### Ejercicio 3: insertionSort

Implementa el algoritmo de ordenamiento Insertion Sort.
El parámetro recibido será un arreglo de elementos de tipo `number`.  
El valor retornado será un arreglo de datos un arreglo de elementos de tipo `number`.

ㅤ

### Ejercicio 4: selectionSort

Implementa el algoritmo de ordenamiento Selection Sort.
El parámetro recibido será un arreglo de elementos de tipo `number`.  
El valor retornado será un arreglo de datos un arreglo de elementos de tipo `number`.

<hr/>

ㅤ

### **Recursos adicionales**

[Página web](https://www.toptal.com/developers/sorting-algorithms) donde podrás ver en tiempo real una comparación de todos los algoritmos.
