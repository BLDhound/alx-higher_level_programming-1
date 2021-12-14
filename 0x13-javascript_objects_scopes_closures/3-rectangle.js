#!/usr/bin/node
module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    let l = '';
    let i = 0;

    const hi = this.height;
    for (let x = 0; x < hi; x++) {
      while (i < this.width) {
        l += 'X';
        i++;
      }
      console.log(l);
    }
  }
};
