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