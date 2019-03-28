'use strict';

const Lam = (...args) => {
  var array = args;
  var max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  console.log(max);
};
Lam(1,2,3,4,5,11,200)
