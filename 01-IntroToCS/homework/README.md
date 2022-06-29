# INTRO TO CS: homework

### Temas de la clase

- Sistemas de numeración
- Lenguaje de máquina

### Aprendizaje esperado

Mediante estos ejercicios podrás empezar a adentrarte en la lógica computacional y ejercitar la construcción de funciones, así como también poner en práctica lo aprendido sobre los sistemas de numeración binario y decimal.

### Duración estimada

45 minutos

### Instrucciones preliminares

1. Para poder ejecutar los test de esta tarea es necesario que nos ubiquemos dentro de la carpeta homework. En la consola, corre el comando `cd` + nombre_de_la_carpeta
2. Cuando estés allí, instala las dependencias con el comando `npm install` o `npm i`
3. ¡Listo! Ya puedes correr los test con el comando `npm test`

## Descripción

Esta tarea consta de dos ejercicios sencillos, donde deberás definir funciones que cumplan con un comportamiento específico.  
En el archivo homework.js se encuentran predefinidas las funciones con los argumentos correspondientes.

### Ejercicio 1: BinarioADecimal

**Escribe una función que reciba por parámetro un número en base binaria y retorne el mismo número en base decimal.**  
El parámetro recibido debe ser de tipo `string`.  
El valor retornado debe ser de tipo `number`.

#### Ejemplo:

```
BinarioADecimal('1100')       // debe retornar 12
```

### Ejercicio 2: DecimalABinario

**Escribe una función que reciba por parámetro un número en base decimal y retorne el mismo número en base binaria.**  
El parámetro recibido debe ser de tipo `number`.  
El valor retornado debe ser de tipo `string`.

#### Ejemplo:

```
DecimalABinario(8)            // debe retornar '1000'
```
