'use strict';

const cars = {
  car1: {
    brand: 'Toyota',
    model: 'Yaris',
    price: '2000$',
  },
  car2: {
    brand: 'Mercedec',
    model: 'Amg-V3',
    price: '10000$',

  },
};
let counter = 0;
console.log('car1:');
for (const key in cars.car1) {
  counter++;
  if (counter === 1) {
    console.log('Ключ: ' + key + ' значение: ' + cars.car1[key] + ' Марка');
  } else { console.log('Ключ: ' + key + ' значение: ' + cars.car1[key]); }
}
console.log('Всего элементов:' + counter);
counter = 0;
console.log('car2:');
for (const key in cars.car2) {
  counter++;
  if (counter === 1) {
    console.log('Ключ: ' + key + ' значение: ' + cars.car2[key] + ' Марка');
  } else { console.log('Ключ: ' + key + ' значение: ' + cars.car2[key]); }
}
console.log('Всего элементов:' + counter);
