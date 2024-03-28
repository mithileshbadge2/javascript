let monty = {
    firstName: "monty",
    lastName: "badge",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

let mithilesh = {
    firstName: "mithilesh",
    lastName: "badge",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

class Person {
    firstName = "monty"
    lastName = "BADGE"
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let montyA = new Person()
let mithileshA = new Person()
console.log(montyA.firstName)
console.log(mithileshA.lastName)
montyA.displayName()

console.log(montyA)
console.log(mithileshA)

montyA.firstName = 'ajayA'
montyA['lastName'] = "jawadeA"
console.log(montyA)

class PersonP{
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let montyM = new PersonP("montyM",'BadgeB')
let nirnayN = new PersonP("nirnayN","VedantV")
console.log(montyM)
console.log(nirnayN)
montyM.displayName()
nirnayN.displayName()
montyM.city = "nagpur"
console.log(montyM)
console.log(montyM.firstName)
console.log(montyM.lastName)
console.log(montyM.city)


class PersonM {
    setfirstName(fn){
        this.firstName = fn
    }
    setlastName(ln){
        this.lastName = ln
    }
    getfirstName(){
        return this.firstName
    }
    getlastName(){
        return this.lastName
    }
}

let mithileshM = new PersonM()
console.log(mithileshM)
mithileshM.setfirstName('monty')
mithileshM.setlastName('badge')
console.log(mithileshM)

let a = mithileshM.getfirstName()
let b = mithileshM.getlastName()
console.log(a)
console.log(b)

let info = {
    full_name: "monty badge",
    age: 24
}
info.age = 65
info['city'] = "nagpur"
console.log(info)

class PersonE {
    set fn(fn){
        this.firstName = fn
    }
    get fn(){
        return this.firstName
    }
    set ln(ln){
        this.lastName = ln
    }
    get ln(){
        return this.lastName
    }
}

let rounak = new PersonE()
rounak.fn = "rounak"
console.log(rounak.fn)
console.log(rounak)

rounak.ln = "gupta"
console.log(rounak.ln)
console.log(rounak)












