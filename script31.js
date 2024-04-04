// let Rounak = {
//     firstName : "Rounak",
//     lastName: "Gupta",
//     displayName: function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// console.log(Rounak.firstName)
// console.log(Rounak.lastName)
// Rounak.displayName()

// function Person(fn,ln){
//     this.firstName = fn
//     this.lastName = ln
//     this.displayName = function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let RounakR = new Person("RounakR","GuptaG")
// let Shobhit = new Person("ShobhitS","HardeH")
// console.log(RounakR)
// console.log(Shobhit)

// console.log(RounakR.__proto__ === Person.prototype)
// console.log(Shobhit.__proto__ === Person.prototype)
// Person.prototype.displayName = function(){
//     console.log(this.firstName + this.lastName)
// }
// Person.prototype.city = "Nagpur"
// RounakR.displayName()
// Shobhit.displayName()

// console.log(RounakR instanceof Person)
// console.log(Shobhit instanceof Person)

// console.log(RounakR.hasOwnProperty('firstName'))
// console.log(Shobhit.hasOwnProperty('lastName'))
// console.log(RounakR.city)
// console.log(Shobhit.city)

// let names = ["monty","badge"]
// console.log(names)
// console.log(names.__proto__ === Array.prototype)
// names.pop()

class Person {
    country = "india"
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
        this.displayName = function(){
            console.log(this.firstName + this.lastName)
        }
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let shobhitM = new Person("shobhit","harde")
let montyM = new Person("monty","badge")
console.log(shobhitM)
console.log(montyM)
shobhitM.displayName()
montyM.displayName()


let info = {
    init:function(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    },
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let montyA = Object.create(info)
console.log(montyA)
montyA.init("monty","badge")
montyA.displayName()