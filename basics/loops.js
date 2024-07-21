let a = 1
// simple for loop 
for (let i = 0; i <= 10; i++) {
    console.log(a + i)
}


// for in loop 
// used for objects to print key and values

let obj = {
    name: "Nikhil",
    role: "Programmer",
    company: "XXXXXXX"
}

console.log("=======", obj["name"])

for (const key in obj) {
    const element = obj[key]
    console.log(element, key)
}


// for of loop 
// work for iterate the strings and arrays
let arr = ["a", "b", "c", "d"]

for (const c of arr) {
    console.log(c)
}

for (const d of "Nikhil") {
    console.log(d)
}

// while loop 

let x = 0;
 while (x<=10){
    console.log(x)
    x++
 }

// do while loop 

do {
    console.log(x)
    x++
} while (x <= 10)