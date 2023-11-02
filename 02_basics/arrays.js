// Arrays

const myArray = [1, 2, 3, 4, 5]

// another way to declaring an array
const myArray2 = new Array(1,2,3,4,5)
/* 
JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
*/

// console.log(myArray[0])

// Array methods

myArray.push(6);
myArray.push(7);
// console.log(myArray)
myArray.pop()
// console.log(myArray)

myArray.unshift(9);
// console.log(myArray)
myArray.shift();
// console.log(myArray)
// console.log(myArray.includes(9)); // false
// console.log(myArray.indexOf(9)); // -1
// console.log(myArray.indexOf(1)); // 0

const newArr = myArray.join();
// console.log(newArr)
// console.log(typeof newArr)

// slice, splice

/*
const myn1 = [1, 2, 3, 4, 5, 6];
console.log("A", myn1) // before slice
const sliceArr = myn1.slice(1, 3)
console.log(sliceArr)
console.log("B", myn1) // after slice and before splice
const spliceArr = myn1.splice(1, 3)
console.log(spliceArr)
console.log("C", myn1) // after splice
*/