const sayHi = require('./modules');
const { john, peter } = require('./modules');

const amount = 12;

if (amount < 10) {
    console.log("Small amount");
} else {
    console.log("Large amount");
}

console.log(john);
sayHi('Tausif');
