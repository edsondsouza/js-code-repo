// Dates

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString);
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// let someDate = new Date(2023, 0, 2);
// let someDate = new Date(2023, 0, 2, 5, 30);
// let someDate = new Date("2023-01-14");
let someDate = new Date("01-14-2023");
// console.log(someDate.toString());
// console.log(someDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp) // in milliseconds
// console.log(someDate.getTime()) // in milliseconds
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
// console.log(newDate)
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: "long"
})