// // let monty = {
// //     fn : "monty",
// //     ln : "badge",
// //     displayName: function(){
// //         console.log(this.fn + this.ln)
// //     }
// // }
// // console.log(monty.fn)
// // console.log(monty.ln)
// // monty.displayName()

// // ---------------------------------
// function Person(fn,ln){
//     this.firstName = fn
//     this.lastName = ln
//     this.displayName = function(){
//         console.log(this.firstName + this.lastName)

//     }
// }

// let montyM = new Person("mithilesh","badge")
// let vedantG = new Person("Vedant","gaikwad")
// console.log(montyM)
// console.log(vedantG)
// montyM.displayName()
// vedantG.displayName()
// ---------------------------------------------

function Person(fn,ln){
    this.firstName = fn
    this.lastName = ln
}
let montyC = new Person("monty","badge")
let vedantB = new Person("vedant","gaikwad")
console.log(montyC)
console.log(vedantB)

console.log(montyC.__proto__ === Person.prototype)
console.log(vedantB.__proto__ === Person.prototype)
Person.prototype.displayName = function(){
    console.log(this.firstName + this.lastname)
}
Person.prototype.country = "India"

montyC.displayName()
vedantB.displayName()

let names = ["monty","mithilesh","vedant"]
console.log(names)
names.pop()
console.log(names.__proto__ === Array.prototype)

// Array.prototype.monty = function(){
//     console.log("hello monty !")
// }
// names.monty()

console.log(names instanceof Array)
console.log(montyC instanceof Person)
console.log(vedantB instanceof Person)

let a = montyC.hasOwnProperty("firstName")
let b = montyC.hasOwnProperty("lastName")
let c = montyC.hasOwnProperty("country")
console.log(a)
console.log(b)
console.log(c)
