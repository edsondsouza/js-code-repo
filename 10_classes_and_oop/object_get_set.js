// This is a legacy code

const User = {
    _email: "e@edson.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// creating an object using factory functions
const tea = Object.create(User);
console.log(tea.email)