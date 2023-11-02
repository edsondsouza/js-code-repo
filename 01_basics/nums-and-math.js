const score = 400
// console.log(score); // 400

const balance = new Number(100);
// console.log(balance); // [Number: 100]

// console.log(balance.toString().length) // 3
// console.log(typeof (balance.toString())) // string
// console.log(balance.toFixed(2)) // 100.00
const anothernumber = 123.89732
// console.log(anothernumber.toPrecision(3)) // 124
// console.log(anothernumber.toPrecision(4)) // 123.9

const localnumber = 10000000
// console.log(localnumber.toLocaleString()) // 10,000,000
// console.log(localnumber.toLocaleString('en-IN')) // 1,00,00,000

// MIN-VALUE, MAX-VALUE

// +++++++++++++++++ Maths +++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.2)); // 4
// console.log(Math.ceil(4.1)); //5
// console.log(Math.floor(4.5)); // 4
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random())
// console.log(Math.random() * 10)
// console.log((Math.random() * 10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // remember the formula