function binaryToDecimal(binary) {
  let decimal = 0;
  let base = 1;

  while (binary > 0) {
    let lastDigit = binary % 10;
    binary = Math.floor(binary / 10);
    decimal += lastDigit * base;
    base *= 2;
  }

  return decimal;
}
let binaryNumber = 11111;
let decimalNumber = binaryToDecimal(binaryNumber);
console.log(decimalNumber);
function BinarioADecimal(num) {
  return parseInt(num, 2); //parseInt es una función en JavaScript que se utiliza para convertir una cadena (string) en un número entero. Su sintaxis básica es la siguiente:parseInt(string, radix);    string es la cadena que deseas convertir en un número entero.    string es la cadena que deseas convertir en un número entero.
    radix es opcional y representa la base numérica del sistema que se utilizará para interpretar la cadena. Puede ser un número entre 2 y 36. Si no se especifica, se asume que es 10.
   
}
console.log(BinarioADecimal("55636"));

function DecimalABinario(num) {
  return num.toString(2);
}
console.log(DecimalABinario(15));
// function BinarioADecimal(num) {
//   let suma = 0;
//   for (var i = 0; i < num.length; i++) {
//     suma = suma + num[i] * 2 ** (num.length - 1 - i);
//   }
//   return suma;
// }

// function DecimalABinario(num) {
//   if (num === 0) {
//     return "0";
//   }
//   let resultado = "";
//   while (num > 0) {
//     let bit = num % 2;
//     resultado = resultado + bit;
//     num = Math.floor(num / 2);
//   }
//   return resultado;
// }
function binaryToDecimal(binary) {
  let decimal = 0;
  let base = 1;

  while (binary > 0) {
    let lastDigit = binary % 10;
    binary = Math.floor(binary / 10);
    decimal += lastDigit * base;
    base *= 2;
  }

  return decimal;
}
let binaryNumber = 11111;
let decimalNumber = binaryToDecimal(binaryNumber);
console.log(decimalNumber);