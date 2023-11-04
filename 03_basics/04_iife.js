// Immediately Invoked Function Expressions(IIFE)

// +++++ Issue => Why to use iife => Reason: Global Scope Pollution +++++
/* 
Sure, here's an example of global scope pollution:

```javascript
// File 1
var sharedVar = "Hello from file 1";

function sharedFunc() {
    console.log(sharedVar);
}

// File 2
var sharedVar = "Hello from file 2";

function sharedFunc() {
    console.log(sharedVar);
}

// Usage
sharedFunc(); // Outputs: "Hello from file 2"
```

In this example, both File 1 and File 2 declare a variable `sharedVar` and a function `sharedFunc` in the global scope. When the code is run, the declarations in File 2 overwrite the ones from File 1 because they share the same global scope. This is a simple example of global scope pollution.

This can lead to unexpected behavior and bugs that are hard to track down, because it's not immediately clear which script is responsible for the final state of the shared variables or functions. It's generally best to avoid global scope pollution by encapsulating variables and functions within their own scopes, such as within functions or modules.
*/

// +++++ How to solve this issue => using iife +++++
/*
IIFE stands for Immediately Invoked Function Expression. It's a function in JavaScript that runs as soon as it is defined. The syntax looks like this:

```javascript
(function() {
    // statements
})();
```

The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. Thus, IIFEs are commonly used to avoid variable hoisting from within blocks, protect against polluting the global environment and simultaneously allow public access to methods while retaining privacy for variables defined within the function.

Here's an example:

```javascript
(function() {
    var privateVariable = "I'm private";
    console.log(privateVariable);
})();
console.log(privateVariable); // This will throw an error because privateVariable is not defined in this scope
```

In this example, `privateVariable` is not accessible outside the IIFE, so trying to log it outside the function will throw an error.

Now, about global scope pollution: In JavaScript, if you start creating lots of variables and functions in the global scope (which is the default if you don't specify anything), you start to run the risk of naming collisions. Two scripts might use the same variable or function name and overwrite each other, causing bugs.

This is known as global scope pollution. It's generally considered best practice to limit the use of the global scope as much as possible, to avoid potential collisions and overwrites. Using IIFEs is one way to avoid adding unnecessary variables and functions to the global scope.
*/

(function chai() {
    console.log(`DB CONNECTED `)
})(); // iife example
// chai() // this will throw an error

// hamesha semicolon(;) ko use karo iife use karne k baad

( () => {
    console.log(`DB CONNECTED TWO`)
} )();

// passing parameters in iife
( (name) => {
    console.log(`DB CONNECTED ${name}`)
} )('Edson');
