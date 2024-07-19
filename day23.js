// outside
// class Person {
//     firstName = undefined
//     lastName = undefined

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let monty = new Person()
// let vedant = new Person()

// console.log(monty.firstName)
// console.log(monty.lastName)

// vedant = {
//     firstName: undefined,
//     lastName:undefined
// }
// vedant.firstName = "vedant"
// vedant.lastName = "gaikwad"

// monty.firstName = "monty"
// monty.lastName = 'badge'

// monty.displayName()
// vedant.displayName()

//p2

class PersonA{
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let Mithilesh = new PersonA("Mithilesh","Badge")
console.log(Mithilesh)
let vedant = new PersonA("Vedant","Gaikwad")
console.log(vedant)

//p3
class PersonB{
    setFirstName(fn){
        this.firstName = fn
    }

    setLastName(ln){
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let Manoj = new PersonB()
console.log(Manoj)

Manoj.setFirstName("Manoj")
Manoj.setLastName("Patil")
console.log(Manoj)