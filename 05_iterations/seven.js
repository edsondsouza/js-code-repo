// map

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNumbers = myNumbers.map((num) => num + 10)
// console.log(newNumbers)

// chaining => you will see this type of code most of the time

const newNumbers = myNumbers
                .map((number) => number * 10)
                .map((number) => number + 1)
                .filter((number) => number > 40)
console.log(newNumbers)