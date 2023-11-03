const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "batman", "flash"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros)
// console.log(marvelHeros[3][1])

// const assemble = marvelHeros.concat(dcHeros);
// console.log(assemble)

const assemble_again = [...marvelHeros, ...dcHeros] // using spread operator
// console.log(assemble_again)

const anotherArr = [1, 2, 3, 4, 5, [6, 7, 8], [4, 5, [6, 7, 1]]]
const real_another_arr = anotherArr.flat(Infinity) // give the depth here 4 or give Infinity
// console.log(real_another_arr)

// in most of the cases when we do data scraping from the web browser, the datas will be in form of NodeList, strings, and objects. In order to convert them to an array we follow these steps 👇

console.log(Array.isArray("Edson")) // false
console.log(Array.from("Edson")) // [ 'E', 'd', 's', 'o', 'n' ]
console.log(Array.from({name: "Edson"})) // [] interesting (interview question)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

// Array.of and Array.from are very similar to each other
/* 
Array.of => Returns a new array from a set of elements.
Array.from => Creates an array from an iterable object.
*/
