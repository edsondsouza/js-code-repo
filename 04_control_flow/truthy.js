const userEmail = []  // "edson@edson.ai", ""

// if (userEmail) {
//     console.log("have email")
// } else {
//     console.log("no email")
// }

// flasy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// check if the array is empty
// if (userEmail.length === 0) {
//     console.log("is empty");
// }

const emptyobj = {}

// if (Object.keys(emptyobj).length === 0) {
//     console.log("obj is empty");
// }

// Nullish Coalescing Operator (??): null, undefined => mainly used when using DB
let val1;
// val1 = 10 ?? 15
// val1 = null ?? 15
// val1 = 10 ?? null
// val1 = 10 ?? undefined
// val1 = undefined ?? 10
// val1 = undefined ?? null
// val1 = null ?? undefined
// val1 = null ?? 10 ?? 15
// val1 = undefined ?? 10 ?? 15
val1 = undefined ?? null ?? 15

// console.log(val1)

// ternary operator => condition ? true : false

const agetodrive = 20

// agetodrive < 20 ? console.log("less than 20") : console.log("greater than 20")
