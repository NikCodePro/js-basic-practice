function greet(name) {
    console.log("hello " + name)

}

for (let i = 1; i < 10; i++) {
    greet("Nikhil")
}

function sum(a, b = 1, c = 2) {
    return a + b + c
}

result = sum(2, 3, 0)
console.log(result)

// Arrow Functions

const greeting = (name) => {
    console.log("Hello Greeting By " + name)
}

greeting("Nikhil Verma")