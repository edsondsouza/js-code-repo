// If you want to become a master in javascript, you will need to master concepts of objects and Events.

// singleton
// Object.create

// when you declare an object using literals singleton nahi banta hai, constructor se object banega to singleton banega

// object literals
const JsUser = {
    name: "Edson",
    "full name": "Edson Sooraj Dsouza",
    age: 21,
    location: "Bengaluru",
    email: "edson@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"]
}
// bts jo bhi ye properties h na (name, age, location etc) sab yek string ki tarah behave karti h

// console.log(JsUser.email)

// console.log(JsUser["email", "full name"]) 
/* In JavaScript, when you try to access an object's property using the bracket notation, you can only access one property at a time. The syntax you've used JsUser["email", "full name"] is not valid for accessing multiple properties.

What happens in your case is that JavaScript evaluates the expression inside the brackets ["email", "full name"] as a comma operator. The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand. So, "email", "full name" will return "full name".

Therefore, console.log(JsUser["email", "full name"]) will attempt to print the value of the property "full name" of the object JsUser. If the property doesn't exist, it will print undefined.

If you want to print multiple properties, you should do it separately like this:*/
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

// Print the symbol
const mySym = Symbol("Key1");

const Another_JsUser = {
    name: "Edson",
    "full name": "Edson Sooraj Dsouza",
    [mySym]: "mykey1",
    age: 21,
    location: "Bengaluru",
    email: "edson@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"]
}

// console.log(Another_JsUser[mySym])
// console.log(typeof mySym) // symbol is an interview question

Another_JsUser.email = "edson@chatgpt.com"
// Object.freeze(Another_JsUser); // freeze the object => make it immutable
Another_JsUser.email = "edson@microsoft.com"
// console.log(Another_JsUser)
/*
Output:
{
  name: 'Edson',
  'full name': 'Edson Sooraj Dsouza',
  age: 21,
  location: 'Bengaluru',
  email: 'edson@chatgpt.com',
  isLoggedIn: false,
  lastLogInDays: [ 'Monday', 'Saturday' ],
  [Symbol(Key1)]: 'mykey1'
}
*/

Another_JsUser.greeting = function() {
    console.log("Hello JS user");
}

Another_JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}
// console.log(Another_JsUser.greeting) // [Function (anonymous)]
// console.log(Another_JsUser.greeting())
// console.log(Another_JsUser.greetingTwo())

// Let's say we have an object user with a name property and two methods: greet (a regular function) and greetArrow (an arrow function).

let user = {
    name: "John",
    greet: function() {
        console.log(`Hello, ${this.name}`);
    },
    greetArrow: () => {
        console.log(`Hello, ${this.name}`);
    }
}

user.greet(); // Outputs: Hello, John
user.greetArrow(); // Outputs: Hello, undefined
/*
In the greet method, this refers to the user object, so this.name is "John".

In the greetArrow method, this doesn't refer to the user object, but to the global context (which is window in a browser). Since there's no global name property, this.name is undefined.

This is why arrow functions are not recommended when you want to access object properties using this. They're great for when you want to keep the same this context as the surrounding code, though.*/