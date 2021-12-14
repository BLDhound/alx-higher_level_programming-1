#!/usr/bin/node
module.exports = class Square extends require('./5-square.js') {
  charPrint (c) {
    if (c === undefined) {
      this.print();
    } else {
      let l = '';
      let i = 0;

      const hi = this.height;
      for (let x = 0; x < hi; x++) {
        while (i < this.width) {
          l += c;
          i++;
        }
        console.log(l);
      }
    }
  }
};
