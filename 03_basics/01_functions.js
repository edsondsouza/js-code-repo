function sayMyName() {
    console.log("E")
    console.log("D")
    console.log("S")
    console.log("O")
    console.log("N")
}

// sayMyName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result;
    // console.log("Never executes")
    return num1 + num2
}

const result = addTwoNumbers(12, 8)
// console.log("Result: ", result)

function logInUserMsg(username = "Sam") {
    if (!username) {
        console.log("Please enter username");
        return;
    }
    return `${username} just logged in`
}

// console.log(logInUserMsg("Edson"))

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 300, 400, 2000))
// Rest parameter should always be a last parameter

const user = {
    name: "Edson",
    age: 21
}

function handleobject(anyobject) {
    console.log(`User name is ${anyobject.name} and age is ${anyobject.age}`)
}

// handleobject(user)
handleobject({
    name: "Hitesh",
    age: 18
})

const myArray = [200, 400, 600, 800]

function handleArray(anyarray) {
    return anyarray[1]
}

// console.log(handleArray(myArray))
console.log(handleArray([200, 600, 800, 1000]))