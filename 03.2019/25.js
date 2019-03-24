'use strict';

const context = n => {
  const cont = '123';
  {
    const cont = 'Hello';
    console.log(cont);
  }
  {
    const cont = n;
    console.log(cont);
  }
  console.log(cont);
};
context(5);
