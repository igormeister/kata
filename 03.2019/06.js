'use strict';

let counter = 0;
const Timer = setInterval(() => {
  const i = counter;
  console.log(i);
  counter += 1;
  if (counter === 11) {
    console.log('Done');
    clearInterval(Timer);
  }
}, 1000);
