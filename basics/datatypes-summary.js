// Primitives: pass by value

// 7 types - String, Number, Boolean, null (temperature fetch example), undefined, Symbol (kisi bhi value ko unique banane k liye use karte hein), BigInt

// in javascript there is nothing called as int and float. They are all referred as Number
let score = 100 // Number
let scoreValue = 100.72 // Number

let isLoggedIn = false // Boolean
let outsideTemp = null // empty
let userEmail; // undefined
let userPasswd = undefined // undefined

let id = Symbol('123')
let anotherId = Symbol('123')

// console.log(id === anotherId); // false
// console.log(id == anotherId); // false

let bigNumber = 8296598501209175845895105n // BigInt

// Non-Primitives or Reference types: pass by reference

// Array, Objects, Functions

const heros = ["spiderman", "superman", "aquaman"];

const myObj = {
    name: "Edson",
    age: 21
}

const myFunction = function(){
    console.log("Hello, world!");
}

// JavaScript is a dynamically typed language

console.log(typeof score) // number
console.log(typeof scoreValue) // number
console.log(typeof id) // symbol
console.log(typeof isLoggedIn) // boolean
console.log(typeof outsideTemp) // object
console.log(typeof userEmail) // undefined
console.log(typeof bigNumber) // bigint
console.log(typeof heros) // object
console.log(typeof myObj) // object
console.log(typeof myFunction) // function => also called as "funtion object"

// https://262.ecma-international.org/5.1/#sec-11.4.3