let mithilesh = {
    firstName : "monty",
    lastName: "badge",
    displayName:function(){
        console.log(this.firstName + this.lastName)

    }
}

let vedant = {
    firstName : "vedant",
    lastName : "gaikwad",
    displayName: function(){
        console.log(this.firstName + this.lastName)
    }
}

class Person {
    first_name =  "ram"
    last_name = "bhai"
    displayName(){
        console.log(this.first_name + this.last_name)
    }
}

let vedantA = new Person()
let mithileshA = new Person()
console.log(mithileshA)
console.log(vedantA)
vedantA.first_name = "veduA"
vedantA.last_name = "gaikwadG"
console.log(vedantA)
console.log(mithileshA)


class PersonB{
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let montyC = new PersonB("monty","badge")
let shobhitS = new PersonB("shobhit","harde")
montyC.displayName()
shobhitS.displayName()
console.log(montyC)
console.log(shobhitS)

class PersonC {
    setFirstName(fn){
        this.firstName = fn
    }

    setLastName(ln){
        this.lastName = ln
    }

    getFirstName(){
        return this.firstName
    }

    getLastName(){
        return this.lastName
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let ajay = new PersonC()
console.log(ajay)
ajay.setFirstName("ajay")
ajay.setLastName("jawade")
let a = ajay.getFirstName()
let b = ajay.getLastName()
console.log(a)
console.log(b)

let montyM = new PersonC()
montyM.setFirstName("Monty")
montyM.setLastName("Badge")
let c = montyM.getFirstName()
let d = montyM.getLastName()
console.log(c)
console.log(d)