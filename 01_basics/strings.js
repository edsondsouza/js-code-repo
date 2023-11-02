// in browser => "hello" + " world" => "hello world"

const name = "Edson" // declaring a syntax
const myRepoCount = 66

// console.log("My name is " + name + " and my repo count is " + myRepoCount); // do not use this. This is used in older versions of Javascript. Nowadays this is not a best practice. Instead use the below syntax

// console.log(`My name is ${name} and my repo count is ${myRepoCount}`); // this is the better way to write the syntax

// another way of declaring a syntax using objects
const gameName = new String('Modern-Combat'); // another way
// but in 👇
const anotherGameName = "City Skylines 2" // this is very similar to the above syntax. The thing is this syntax works the same like the above sytax behind the scene.

// in browser the type of gameName shows as object. 
// console.log(gameName[0]) // M
// console.log(gameName.__proto__) // {}
// console.log(gameName.length); // 13
// console.log(gameName.toUpperCase()); // MODERN COMBAT, does not change the original string
// console.log(gameName)
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('d'));

// Always remember learing the methods of string will always be benifitial in not only cracking the interview but also in becoming a better js programmer.

// subString, slice (important)
// console.log(gameName.length); 13
const newString = gameName.substring(0, 4);
// console.log(newString);
// const anotherString = gameName.slice(-13, 3);
// console.log(anotherString);

const myName = "Edson Sooraj Dsouza"
const sliceName = myName.slice(-19,8)
// console.log(sliceName)

/* 
The difference between subString and slice is, slice can take the negative indexes. A programmer can give negative indexes to the subString, but the subString method will neglect the negative indexes.
*/

// trim, replace, includes, split method

const spaceInName = "     Edson     " 
// console.log(spaceInName.trim()) // original string remains the same
// console.log(spaceInName)
// console.log(spaceInName.trimStart())
// console.log(spaceInName)
// console.log(spaceInName.trimEnd())
// console.log(spaceInName)

// const url = "https://www.edson/edson sooraj" // example url
const url = "https://www.edson/edson%20sooraj" // browser automatically changes the url by adding %20 between spaces. But we do not need %20 in the url
// console.log(url.replace('%20', '-'))

// console.log(url.includes('javascript'))
// console.log(url.includes('sooraj'))

const superHero = "I am Bhopendar Jogi" // return the string in array format
console.log(superHero.split(' ')) // return an array [ 'I', 'am', 'Bhopendar', 'Jogi' ]