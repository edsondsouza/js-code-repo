// ES6

// jaise hi class se object initialize hoga (new keyword), constructor automatically run hota hai 

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     usernameCapitalize() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@google.com", "123")
// console.log(chai.encryptPassword())
// console.log(chai.usernameCapitalize())

// behind the scenes

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.usernameCapitalize = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@google.com", "123")
console.log(tea.encryptPassword())
console.log(tea.usernameCapitalize())