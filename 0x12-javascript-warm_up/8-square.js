#!/usr/bin/node
const process = require('process');
let l = '';
let i = 0;

if (process.argv.length > 2 && parseInt(process.argv[2])) {
  const size = process.argv[2];
  for (let x = 0; x < size; x++) {
    while (i < size) {
      l += 'X';
      i++;
    }
    console.log(l);
  }
} else {
  console.log('Missing size');
}
