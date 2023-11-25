class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai", "chai@udemy.com", "123")
// console.log(chai)
// chai.addCourse()
// chai.logMe()

const masalaChai = new User("masalachai")
// masalaChai.logMe()
// masalaChai.addCourse() // => error no access to addCourse

// console.log(chai === masalaChai) // false
// console.log(chai === Teacher) // false
// console.log(chai instanceof Teacher) // true
// console.log(chai instanceof User) // true

