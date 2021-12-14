#!/usr/bin/node
function add (param1, param2) {
  return param1 + param2;
}

console.log(add(Number(process.argv[2]), Number(process.argv[3])));
