#!/usr/bin/node
const process = require('process');

const arr = [];
if (process.argv.length > 3) {
  for (const p in process.argv) {
    if (p > 1) {
      arr.push(parseInt(process.argv[p]));
    }
  }
  let max = Math.max(...arr);
  arr.splice(arr.indexOf(max), 1);
  max = Math.max(...arr);
  console.log(max);
} else {
  console.log(0);
}
