// "Hello" + " World" => Hello World

let myname = "Edson";
let myage = 21;

// console.log("Hello, my name is " + myname + " and my age is" + myage); // this syntax is used in old javascript

// console.log(`Hello, my name is ${myname} and I am ${myage} years old.`) this is the new syntax of using the variables between the string and is called as string interpolation

// there are mainly two ways of declaring a string
let gamename = "moderncombat"

let username = new String("bhopenderjogi")

// console.log(gamename[0])
// console.log(username[0])
// console.log(gamename.__proto__)
// console.log(username.__proto__)
// console.log(username.charAt(2))
// console.log(username.length)
// console.log(username.toUpperCase())
// console.log(username)
// console.log(username.toLowerCase() )
// console.log(username)

// learning methods of the string will always be benefitial not only to crack the interview but also in becomming a better programmer


// console.log(username.substring(1, 4))
// console.log(username.slice(1, 4))

// bhopenderjogi
// console.log(username.slice(-1, 4))
// console.log(username.length)
// console.log(username.slice(-9, -5))
// console.log(username.slice(-13, -4))
// console.log(username.slice(-5, -3))
// console.log(username.slice(-8, -5))

// trim, replace, includes, split
const spaceinname = "    Edson    "
// console.log("trim at both end:", spaceinname.trim())
// console.log("original:", spaceinname)
// console.log("trim at start:", spaceinname.trimStart())
// console.log("original:", spaceinname)
// console.log("trim at end:", spaceinname.trimEnd())
// console.log("original:", spaceinname)

// console.log(username)
// console.log(username.replaceAll("h", "b"))
// console.log(username.replace("h", "b"))
// console.log(username)

// console.log(username.includes("z"))

// const url = "https://www.edson/edson sooraj"
const url = "https://www.edson/edson%20sooraj" // percent encoding or url encoding
// console.log(url.replace("%20", "-"))

const userFullName = "Edson-Sooraj-Dsouza-Edson"
// console.log(userFullName.split(" ", "2"))
// console.log(userFullName.split(" "))
// console.log(userFullName.split("-"))

const splitword = userFullName.split("-")
// console.log(splitword)
// console.log(splitword[1])
// console.log(splitword[3])

const somesentence = 'The quick brown fox jumps over the lazy dog.';
console.log(somesentence.split(" "))
let char = somesentence.split('')
console.log(char[11])

// split(seperator))
// split(seperator, limit))