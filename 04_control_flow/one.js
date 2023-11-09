// control flow or logic flow
// kabhi bi pura code run nahin honi chahiye. Agar user signup button click karta hei toh sirf signup related code run honi chahiye. aisi code likne k liye control flow madad karta hai

// if condition syntax
// syntax: 
/* if(condition){
    // your code goes here
}
*/

const isuserloggedin = true
const temperature = 40

// if (temperature <= 40) {
//     console.log("less than or equal to 40")
// } else {
//     console.log("greater than 40")
// }
// console.log("execute")

// <, >, <=, >=, ==, !=, === (also checks for type), !== (also checks for type)

const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`Power is: ${power}`)
// }
// console.log(`Power is: ${power}`)

const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2"); immature way of writing the code, never write something like this

// if (balance < 500) {
//     console.log("less than 500")
// } else if (balance < 750) {
//     console.log("less than 750")
// } else if (balance < 900) {
//     console.log("less than 900")
// } else {
//     console.log("less than 1200")
// }

const userloggedin = true
const debitcard = true

// if (userloggedin && debitcard) {
//     console.log("allow to buy course")
// }

const loggedinfromgoogle = false
const loggedinfromemail = true

if (loggedinfromemail || loggedinfromgoogle) {
    console.log("allow to buy course")
}