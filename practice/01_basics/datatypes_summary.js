// primitives: pass-by-value

// js mei int and float ki concept nahi hoti hei. Sab numbers hi hein

// console.log(typeof 12)
// console.log(typeof 12.87285)

let isLoggedIn = false // boolean
let outsideTemp = null // => null matlab empty hota hai
let userEmail; // undefined
let userPasswd = undefined // undefined
// console.log(isLoggedIn)
// console.log(outsideTemp)
// console.log(userEmail)
// console.log(userPasswd)

// let userId = Symbol('123')
// let anotheruserId = Symbol('456')
let anotheruserId = Symbol('123')

// console.log(userId === anotheruserId)

let bigNumber = 3564789569472856789465978n
// console.log(typeof bigNumber)

// non-primitive types or reference types => arrays, functions, objects

const heros = ["superman", "batman", "spiderman"]

// const heros = {
//     0: "superman",
//     1: "batman",
//     2: "spiderman"
// }

const userInfo = {
    name: "John",
    age: 32
}

function greeting() {
    console.log("Hello")
}

// console.log(typeof heros) // => object
// console.log(typeof userInfo) // => object
// console.log(typeof greeting) // => function => function object

// stack (pass by value => primitives) and heap (pass by reference => non-primitives)

let myhero = "superman"
let yourhero = myhero;
// console.log("before")
// console.log(`your hero is ${yourhero}`)
// console.log(`my hero is ${myhero}`)

yourhero = "batman"
// console.log("after")
// console.log(`your hero is ${yourhero}`)
// console.log(`my hero is ${myhero}`)

let user = {
    name: "hitesh",
    email: "hitesh@goolge.com"
}

let anotherUser = user
anotherUser.name = "Edson"
console.log(anotherUser)
console.log(user)