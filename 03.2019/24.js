'use strict';

const arr = array => {
  for (let i = 0; i < array.length; i++) {
    var max = array[0];
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};
const someArray = [1, 2, 5, 6, 3, 4, 9, 11];
console.log(arr(someArray));

