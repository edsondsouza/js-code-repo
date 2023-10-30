let score = true // 33, "33", "33abd", null, undefined, true, false

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/* 
33 => 33
"33" => 33
"33abc" => NaN
null => 0
undefined => NaN
true = 1; false = 0
*/

let isLoggedIn = "Edson" // 1, "", "Edson"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

let someNumber = 33 // 33

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// 1 => true
// "" => false
// "Edson" => true

// 33 => conversion from number to string, the output will look like number but when you "typeof" the output will be displayed as string.

// ************ Operations ************

let x = 3;
const y = x++; 

console.log(x);
console.log(y);

let a = 3;
const b = ++a;

console.log(a);
console.log(b);