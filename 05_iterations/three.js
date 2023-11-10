// for of

// ["", "",""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello World"
for (const greet of greetings) {
    if (greet === " ") continue
    // console.log(greet)
}

for (const num of arr){
    // console.log(num)
}

// Maps
const map = new Map()
map.set("in", "india")
map.set("us", "united states of america")
map.set("fn", "france")
// console.log(map)
for (const [key, value] of map) {
    // console.log(key, ':-', value)
}

// for-of in objects

const myobj = {
    game1: 'NFS',
    game2: "Valorant"
}

for (const [key,value] of myobj) {
    // console.log(key, ' :- ', value) // this gives an error, for-of do not work for objects
}

