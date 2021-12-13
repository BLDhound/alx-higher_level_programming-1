#!/usr/bin/node
const process = require('process');

const fac = parseInt(process.argv[2]);
let aux = fac;
let aux1 = aux;

if (fac) {
  while (aux > 1) {
    aux -= 1;
    aux1 = aux1 * aux;
  }
  console.log(aux1);
} else {
  console.log(1);
}
