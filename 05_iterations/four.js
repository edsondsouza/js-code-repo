const myObject = {
    js: "JavaScript",
    cpp: "C++",
    java: "Java",
    rs: "Rust"
}

for (const key in myObject) {
    // console.log(key)
    // console.log(myObject[key])
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "py", "cpp", "java"]
for (const key in programming) {
    // console.log(key)
    // console.log(programming[key])
}

const map = new Map()
map.set("in", "india")
map.set("us", "united states of america")
map.set("fn", "france")

for (const key in map) {
    // console.log(key) // this does not give an output, map is not iterable
}
