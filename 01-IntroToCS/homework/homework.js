"use strict";

function BinarioADecimal(num) {
  let suma = 0;
  for (var i = 0; i < num.length; i++) {
    suma = suma + num[i] * 2 ** (num.length - 1 - i);
  }
  return suma;
}

function DecimalABinario(num) {
  if (num === 0) {
    return "0";
  }
  let resultado = "";
  while (num > 0) {
    let bit = num % 2;
    resultado = resultado + bit;
    num = Math.floor(num / 2);
  }
  return resultado;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
