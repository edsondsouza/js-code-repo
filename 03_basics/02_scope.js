// global scope
// let a = 30
// const b = 40
// var c = 60
let a = 300
if (true) {
    // local scope or block scope
    let a = 30
    const b = 40
    // var c = 60 never use var keyword
    // console.log("Inner:", a)
}

// console.log(a)
// console.log(b)
// console.log(c) // this gets printed, this is the reason we do not use var


function one(){
    let name = "Edson"
    function two(){
        let course = "js in hindi"
        console.log(name);
    }
    // console.log(course);

    // two()
}
// one()

if (true) {
    const name = "Edson"
    if (name === "Edson") {
        const website = " youtube"
        // console.log(name + website)
    }
    // console.log(website)
}
// console.log(name)

// +++++++++++++++ interesting +++++++++++++++

// addOne(5) // executes
function addOne(num) {
    return num + 1
}

// addTwo(4) // does not execute
const addTwo = function(num){
    return num + 2
}