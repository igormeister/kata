'use strict';

const Timer =setInterval(()=>{
const comp1=Math.floor(Math.random()*10)
const comp2=Math.floor(Math.random()*10)
if(comp1==comp2){
  console.log('Угадал ' + comp1)
  }else {
console.log('Не угадал.Ваш ответ: ' + comp2 + ' Правильный ответ: ' + comp1);
  }
},500);