const score = 100;

const balance = new Number(1000)

// console.log(score)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(typeof balance.toString())
// console.log(balance.toFixed(2))

const randomNumber = 123.8653
// console.log(randomNumber.toPrecision(4))

const currency = 10000000
// console.log(currency.toLocaleString())
// console.log(currency.toLocaleString('en-IN'))

// console.log("Before value of", typeof balance)
let valueofnumber = balance.valueOf();
// console.log(valueofnumber)
// console.log("after value of:", typeof balance)
// console.log("after value of:", typeof valueofnumber)

// know what is MAX_VALUE and MIN_VALUE

// ++++++++++++ Math ++++++++++++

// console.log(Math) // this is an object
// console.log(Math.abs(-4)) // negative will convert to positive
// console.log(Math.abs(4)) // positive will remain positive
// console.log(Math.round(4.2))
// console.log(Math.round(4.5))
// console.log(Math.round(4.6))
// console.log(Math.round(4.4))
// console.log(Math.ceil(4.2))
// console.log(Math.ceil(4.5))
// console.log(Math.ceil(4.8))
// console.log(Math.floor(4.2))
// console.log(Math.floor(4.5))
// console.log(Math.floor(4.8))
// console.log(Math.min(4,5,6,7))
// console.log(Math.max(4,5,6,7))

// console.log(Math.random() * 10 + 1)
/* 
This line of JavaScript code generates a random number between 1 and 11 (not including 11).

Here's a breakdown of what each part does:

1. `Math.random()`: This is a built-in JavaScript function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). So, it could return something like 0.5, 0.123456789, etc., but it will never return 1.

2. `Math.random() * 10`: This multiplies the random decimal by 10. So now, instead of a number between 0 and 1, you have a number between 0 and 10 (not including 10).

3. `Math.random() * 10 + 1`: This adds 1 to the result. So now, instead of a number between 0 and 10, you have a number between 1 and 11 (not including 11).

So, when you run this code, it will print a random number between 1 and 11 (not including 11) to the console.
*/

const min = 10
const max = 20
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
/* 
This JavaScript code generates a random integer between two specified numbers, `min` and `max`.

Here's a breakdown of what each part of the code does:

1. `const min = 10` and `const max = 20`: These lines declare two constants, `min` and `max`, and assign them the values 10 and 20, respectively. These values represent the range within which the random number will be generated.

2. `Math.random()`: This is a JavaScript function that generates a random decimal number between 0 (inclusive) and 1 (exclusive).

3. `Math.random() * (max - min + 1)`: This expression multiplies the random decimal by the range of numbers (i.e., `max - min + 1`). The `+ 1` is added to make the `max` value inclusive in the random generation.

4. `Math.floor(...)`: This function rounds down the result of the expression inside the parentheses to the nearest whole number, effectively converting the decimal into an integer.

5. `... + min`: This shifts the range of possible values from `(0 to max-min)` to `(min to max)`.

6. `console.log(...)`: This line outputs the result to the console.

So, in summary, this code generates a random integer between 10 and 20 (inclusive) and logs it to the console.
*/