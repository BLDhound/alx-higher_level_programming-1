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

  rotate () {
    const aux = this.height;
    this.height = this.width;
    this.width = aux;
  }

  double () {
    this.height = 2 * this.height;
    this.width = 2 * this.width;
  }
};
