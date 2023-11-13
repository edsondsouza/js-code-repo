const mynumber = false  // 33, "33", "33abc", undefined, null, true, false

const converted = Number(mynumber)
// console.log(converted)
// console.log(typeof converted)

const userLoggedIn = "Edson" // 1, "", "Edson"
const isLoggedIn = Boolean(userLoggedIn)
// console.log(isLoggedIn)

const someNumbertoString = 33

const numbertostring = String(someNumbertoString)
// console.log(numbertostring)
// console.log(typeof numbertostring) // => looks like number but when typeof used, gives output string

// ++++++++++++ Operations ++++++++++++
let x = 3;
const y = x++; 

// console.log(x);
// console.log(y);

let a = 3;
const b = ++a;

// console.log(a);
// console.log(b);

// a++ => increments after
// ++a => increments before