// Remember the "race condition" in getter and setter

class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase() // giving the password to the user
        return `${this._password}edson`
    }

    set password(value){
        this._password = value // setting the value in DB
    }
}

const edson = new User("e@edson.ai", "abc")
console.log(edson.password)
console.log(edson.email)