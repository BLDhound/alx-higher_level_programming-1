#!/usr/bin/node
const process = require('process');
const c = 'C is fun';

let x = 1;
if (process.argv.length > 2) {
  while (x <= process.argv[2]) {
    console.log(c);
    x += 1;
  }
} else {
  console.log('missing number of occurences');
}
