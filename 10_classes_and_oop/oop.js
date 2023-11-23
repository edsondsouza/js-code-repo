// object literals

const user = {
    username: "Edson",
    loggedInCount: 3,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got the user details from the database")
        // console.log(`Username: ${this.username}`)
        // console.log(this)
    }
}

// console.log(user.username)
// console.log(user["loggedInCount"])
// console.log(user.getUserDetails())
// console.log(this)

// new keyword

function User(username, age, location){
    this.username = username
    this.age = age
    this.location = location

    this.greeting = function(){
        console.log(`Hello, ${this.username}`)
    }

    return this // this implicitly gets added so it's okay if not written
}

const userOne = new User("Edson", 21, "Bengaluru")
const userTwo = new User("Hitesh", 30, "Jaipur")
console.log(userOne.constructor) // constructor refers to overselves. Here it is function User
// console.log(userTwo) 

/*
When "new" keyword is used,
- empty object will be created. We call this an "instance of object". for every "new" keyword, new instance of an object will be created.
- Constructor function will be created. This will pack all the arguments in it and give it to you
- arguments will get injected into this keyword
- you get the values as output
*/

// check "instanceof" in javascript (mdn)