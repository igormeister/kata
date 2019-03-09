'use strict'

let result = new Array();
for (let i = 0; i < 100; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    result[i] = randomNumber;
    console.log(randomNumber);
}

console.log('Чётные:');
for (let i = 0; i < result.length; i++)
    if (result[i] % 2 == 0) {
        console.log(result[i]);
    }
