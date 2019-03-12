'use strict';

const kata = car => {
  console.log(`car brand , ${car.brand}`);
  console.log(`car model , ${car.model}`);
  console.log(`car model , ${car.price}`);
};
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

for (const model in cars) {
  console.log(model);
  const car = cars[model];
  kata(car);

}
