'use strict';

const a = 5;
const b = 'Hello user';
const c = true;
const person = {
  name: 'Mark',
  work: 'Waiter',
  hight: '200',
  gender: 'Male',
  weight: '100',
};
console.log('Числовой тип данных: ' + a + ' ' + typeof a);
console.log('Символьный тип данных:' + b + ' ' + typeof b);
console.log('Булевый тип данных:' + c + ' ' + typeof c + '\n');
for (const key in person) {
  console.log('Ключ:' + key + 'значение:' + person[key]);
}
console.log('\n' + 'Обьектный тип данных:' + typeof person);
