'use strict';

const array = [5, 4, 3, 2, 1];
let counter = 0;
let swap = 0;
for (let i = 0; i < array.length; i++) {
  let flag = false;
  for (let j = 0; i < array.length - j; j++) {
    counter++;
    if (array[j] > array[j + 1]) {
      const temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
      flag = true;
      swap++;
    }
  }
  if (!flag) {
    break;
  }
  console.log(array);
}
const O = swap + counter;
const n = array.length;
const n2 = Math.pow(n, 2);
console.log('Отсортированный массив: ' + array);
console.log('Количество свапов:' + swap);
console.log('Количество проверок:' + counter);
if (O === n2) {
  console.log('Худший вариант:' + O);
}
else if (O === n) {
  console.log('Лучший вариант:' + O);
}
else if (O < n2) {
  console.log('Средний вариант:' + O);
}


