// Javascript follows prototypal inheritance

/*
Yes, in JavaScript, almost everything is an object. This includes arrays, functions, dates, numbers, strings, and even the primitive values null and undefined.

Objects are a way to group together related data and functionality. For example, you could create an object to represent a user, with properties for the user's name, email address, and age. You could then create methods on the object to allow the user to log in, logout, and change their password.
*/

function multiplyby5(num){
    return num * 5
}

multiplyby5.power = 2

// console.log(multiplyby5(5))
// console.log(multiplyby5.power)
// console.log(multiplyby5.prototype)

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`The value of score is ${this.score}`)
}

const user1 = createUser("user1", 100)
const user2 = createUser("user2", 80)

user1.printMe()


/*
** IMPORTANT **

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/