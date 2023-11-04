const user = {
    username: "Edson",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
        // console.log(this)
    }
}
// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();

// console.log(this); // {} => in nodejs the global object is empty object
// in browser the global object is Window object


// function chai(){
//     let username = "Edson"
//     console.log(this.username);
//     console.log(this)
// }

// const chai = function(){
//     let username = "Edson"
//     console.log(this.username);
//     console.log(this)
// }

const chai = () => {
    let username = "Edson"
    console.log(this.username);
    console.log(this)
}

/* 
The difference in output between these three functions is due to how JavaScript handles the `this` keyword in different types of functions.

1. In the first function, `this` refers to the global object (in a browser, this would be the `window` object). In Node.js, the global object is `global`.

2. In the second function, `this` also refers to the global object. This is because the function is still a regular function, even though it's assigned to a variable.

3. In the third function, `this` is lexically bound. This means it takes on the value of `this` from the outer scope at the time it's defined. Arrow functions do not have their own `this` context, so `this` refers to the enclosing context. If the arrow function is defined in the global scope, `this` would be the global object. However, if it's defined within another function, `this` would refer to the `this` value of that function.

This is a fundamental aspect of JavaScript and is important to understand when working with different types of functions.
*/

// chai()

// arrow functions

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// implicit return
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2); // agar parenthesis lagaya to return keyword likneki zaroorat nahin h aur agar braces ya curly brackets lagaya toh compulsory return keyword ko use karna padega

const addTwo = (num1, num2) => ({username: "Edson"});

console.log(addTwo(5, 6))