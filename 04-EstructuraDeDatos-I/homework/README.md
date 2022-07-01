# Estructuras de Datos I: homework

### **Temas de la clase**
- Recursión
- Estructuras _First In, First Out_
- Cola (queue)

ㅤ  
### **Objetivo**
Al resolver estos ejercicios podrás empezar a ejercitar el procedimiento lógico para construir funciones recursivas. Además, vas a construir una estructura de datos desde cero, logrando comprender su funcionamiento característico.

ㅤ  
### **Duración estimada**
90 minutos

ㅤ  
### **Instrucciones preliminares**
_Escribe las soluciones a los ejercicios en `homework.js`._

1. Para ubicarte dentro de la carpeta homework, en la consola corre el comando 
```
cd nombre_de_la_carpeta
```
2. Luego, instala las dependencias:
```
npm install
```
3. ¡Listo! Ya puedes correr los tests tantas veces como quieras, con el comando
```
npm test
```


ㅤ  
<hr/>

## **Descripción**
A continuación se presentan tres ejercicios.  
En el primero y el segundo, implementarás soluciones basadas en el concepto de recursividad aprendido en clase - recuerda reducir el problema a partes simples, definir los casos base, identificar la o las operaciones que deberán repetirse...  
El tercer ejercicio consiste en implementar, mediante una clase o función constructora, una estructura de datos, modelando mediante métodos su comportamiento característico.  
Además, se ofrece un ejercicio adicional (extra credit) no obligatorio, el cual propone trasladar la lógica recursiva de los ejercicios 1 y 2 a un procedimiento iterativo.  

ㅤ  
### Ejercicio 1: nFactorial
Escribe una función recursiva que reciba por parámetro un número natural _n_, y retorne su factorial.
> Siendo _n_ un número natural, su factorial (_n!_) es el producto de _n_ por todos los números naturales menores que él y mayores a 0.   

**Ejemplo:** 

5! = 5 * 4 * 3 * 2 * 1  

ㅤ  
### Ejercicio 2: nFibonacci
Escribe una función recursiva que reciba por parámetro un número natural _n_, y retorne la _n_-ésima posición de la secuencia de Fibonacci.  

> ***Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...***  
Tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la secuencia de Fibonacci, cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.

**Ejemplo:**  

```javascript
nFibonacci(7) // retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.
```

ㅤ  
### Ejercicio 3: Queue
**Implementar la clase Queue**, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna `undefined` cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.


ㅤ  
### Ejercicio 4: _Extra credit_
Como ejercicio adicional y completamente opcional, al terminar de resolver este problema puedes intentar redefinir las funciones de los ejercicios 1 y 2, de manera que logren los mismos resultados pero de manera **iterativa**.
<hr/>