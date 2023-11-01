// in browser => "hello" + " world" => "hello world"

const name = "Edson" // declaring a syntax
const myRepoCount = 66

// console.log("My name is " + name + " and my repo count is " + myRepoCount); // do not use this. This is used in older versions of Javascript. Nowadays this is not a best practice. Instead use the below syntax

// console.log(`My name is ${name} and my repo count is ${myRepoCount}`); // this is the better way to write the syntax

// another way of declaring a syntax using objects
const gameName = new String('Modern Combat'); // another way
// but in 👇
const anotherGameName = "City Skylines 2" // this is very similar to the above syntax. The thing is this syntax works the same like the above sytax behind the scene.

// in browser the type of gameName shows as object. 
// console.log(gameName[0]) // M
// console.log(gameName.__proto__) // {}
// console.log(gameName.length); // 13
// console.log(gameName.toUpperCase()); // MODERN COMBAT, does not change the original string
// console.log(gameName)
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));