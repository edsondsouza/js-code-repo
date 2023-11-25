// consider this class as mongoDB which gives ID for any users
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`user ${this.username} is logged in`)
    }

    static createID(){
        return "123"
    }
}

const chai = new User("chai") 
// console.log(chai.createID())

// will static give access to child?
class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const edson = new Teacher("edson", "edson@gmail.com");
edson.logMe()
edson.createID()