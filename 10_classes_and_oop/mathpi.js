// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)

const chai = {
    name: "Lemon Chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log(`${this.name} ordered`)
    }
}

// console.log(chai)
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))


// Object.defineProperty(chai, "name", {
//     writable: false,
//     enumerable: false,
//     configurable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`)
    }
}

/*
Object.defineProperty(chai, "name", {
    enumerable: false,
})

=> jab aap kisi bhi yek object property (name) ka enumerable ko false karoge vo property (name) iterable nahin hoga.
*/