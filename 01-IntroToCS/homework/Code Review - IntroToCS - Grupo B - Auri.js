"use strict";

function BinarioADecimal(num) {
  //string
  // console.log(num[3])
  // var resultado = 0;
  // var exponente = num.length - 1

  // console.log(exponente);

  // for (let i = 0; i < num.length; i++) {
  //    // resultado = resultado + num[i] * 2 ** exponente
  //    resultado += num[i] * Math.pow(2, exponente)
  //    exponente--
  // }
  // return resultado;
  return parseInt(num, 2);
}

// console.log(BinarioADecimal('111'));

function DecimalABinario(num) {
  // var resultado = '';

  // while(num !== 0){
  //    resultado = (num % 2) + resultado;
  //    num = Math.floor(num / 2);
  // }

  // return resultado;

  return num.toString(2);
}

// console.log(DecimalABinario(12));

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
