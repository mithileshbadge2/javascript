// lexical scope
function addition() {
    let a = 10
    let b = 5
    // console.log(a+b)
    function additionB() {
        let s = 10
        let q = 5
        console.log(s + q + a + b)
        function additionC() {
            let m = 10
            let n = 5
            console.log(a + b + s + q + m + n)
        }
        additionC()
    }
    additionB()
}
addition()

// closures
function displayName() {
    return function () {
        return "hello"
    }
}
let h1 = displayName()
console.log(h1())

function displayName2() {
    console.log("hello")
    return "bye"
    console.log("hello good bye")
}
let h2 = displayName2()
console.log(h2)

// function additionP() {
//     let x = 110
//     let y = 120

//     return function () {
//         console.log(x + y)
//     }
// }
// let m = additionP()

// let n = function () {
//     console.log(x + y)
// }
// n()

// function declaration
function additionF(x,y){
    return x + y
}
let w1 = additionF(45,40)
console.log(w1)

// function expression
let additionB = function(x,y){
    return x + y
}
let w2 = additionB(45,40)
console.log(w2)

// arrow function

let additionC = (x,y)=>{
    return x + y
}
let w3 = additionC(45,40)
console.log(w3)




















