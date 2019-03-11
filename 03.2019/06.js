'use strict';

let counter = 0;
const Timer = setInterval(() => {
let i=counter;
console.log(i);
counter += 1;
if (counter === 11) {
    console.log('Done');
    clearInterval(Timer);
  }
}, 1000);