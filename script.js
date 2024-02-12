// program 1
console.log("Hello")
let balance = 0
console.log(balance)
balance = 100
console.log(balance)

// program 2
const  //pi = 3.14
//console.log(pi)
pi = 88
console.log(pi)

// program 3
let q = 10 
let r = 5

console.log(q+r)
console.log(q-r)
console.log(q*r)
console.log(q/r)
console.log(q%r)

let s = 100
let t = 50

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}

Calculator(10,3)
Calculator(15,-3)
Calculator(30,10)

//program 4 without return type& parameter
function additionA(){
    console.log(9+9)
}
additionA()

//with para and no return
function additionB(x,y){
    console.log(x+y)
}
additionB(12,3)
additionB(6,3)

// with para and return type
function additionC(x,y){
    return x + y
}
let q1 = additionC(13,4)
console.log(q1)
