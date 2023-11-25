// let myname = "Edson    "
// let channelName = "Chai   "

// console.log(myname.trueLength)

const heros = ["thor", "spiderman"]

const heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`)
    }
}

Object.prototype.edson = function(){
    console.log(`Edson is present in all object`)
}

Array.prototype.heyEdson = function(){
    console.log(`Edson says hello`)
}

// heroPower.edson()
// heros.edson()
// heros.heyEdson()
// heroPower.heyEdson()

// inheritance => prototypal inheritance

const user = {
    username: "teacher"
}

const teacher = {
    makeVideos: true
}

const teachingAssistant = {
    isAvailable: false
}

const TAassistant = {
    createAssignment: true,
    __proto__: teachingAssistant
}

teacher.__proto__ = user;

// modern syntax => prototypal inheritance
// Object.setPrototypeOf(TAassistant, teacher)

const anotherUser = "ChaiaurCode     "

String.prototype.trueLength = function(){
    console.log(this.trim().length)
}

anotherUser.trueLength()
"Edson         ".trueLength()
"hello".trueLength()