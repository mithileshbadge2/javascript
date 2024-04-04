let monty = {
    firstName: "monty",
    lastname: "badge",
    displayName:function(){
        console.log(this.firstName + this.lastname)
    }
}
console.log(monty.firstName)
console.log(monty.lastname)
monty.displayName()

let vedant = {
    firstName: "vedant",
    lastname: "gaikwad",
    displayName:function(){
        console.log(this.firstName + this.lastname)
    }
}
console.log(vedant.firstName)
console.log(vedant.lastname)
vedant.displayName()

// p2
function Person(fn,ln){
    this.firstName = fn
    this.lastname = ln
    this.displayName = function(){
        console.log(this.firstName + this.lastname)
    }
}
let montyA = new Person("monty","badge")
console.log(montyA)
montyA.displayName()

function Vehicle(color,type){
    this.color = color
    this.type = type
    this.displayColor = function(){
        console.log(this.color)
    }
}
let tata = new Vehicle("black","sedan")
let suzuki = new Vehicle("white","SUV")
console.log(tata)
console.log(suzuki)
tata.displayColor()
suzuki.displayColor()

class PersonM{
    constructor(fn,ln){
        this.firstName = fn
        this.lastname = ln
    }
    displayName(){
        console.log(this.firstName + this.lastname)
    }
}

class VehicleV{
    constructor(color,type){
        this.color = color
        this.type = type
    }
    displayColor(){
        console.log(this.color)
    }
}

let CarB = new VehicleV("BMW","sedan")
let montyB = new PersonM("mithilesh","Badge")

// object.create()
let CarC = Object.create({})
console.log(CarC)
CarC.color = "red"
CarC.type = "SUV"
CarC.displayColor = function(){
    console.log(this.color)
}
console.log(CarC)









