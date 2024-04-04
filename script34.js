let monty = {
    firstName: "monty",
    lastName: "badge",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

let amol = {
    firstName: "amol",
    lastName: "rao"
}

// let displayName2 = monty.displayName
let displayName2 = function(){
    console.log(this.firstName + this.lastName)
}
displayName2()

// bind
let q = displayName2.bind(amol)
q()
// let q  = function(){
//     console.log(amol.firstName + amol.lastName)
// }

// let  mithilesh = {
//     firstName: "mithilesh",
//     lastName: "badge"
// }

// let vedant = {
//     firstName: "vedant",
//     lastName: "gaikwad"
// }

// let nirnay = {
//     firstName: "nirnay",
//     lastName: "sangolkar"
// }

// let displayName3 = function(){
//     console.log(this.firstName + this.lastName)
// }

// displayName3.bind(monty)()
// displayName3.bind(vedant)()
// displayName3.bind(nirnay)()

// call
let  mithilesh = {
    firstName: "mithilesh",
    lastName: "badge"
}

let vedant = {
    firstName: "vedant",
    lastName: "gaikwad"
}

let nirnay = {
    firstName: "nirnay",
    lastName: "sangolkar"
}

let displayName4 = function(a,b){
    console.log(this.firstName + this.lastName)
    console.log(a)
    console.log(b)
}
displayName4.call(mithilesh,"hi")
displayName4.call(vedant,"hi")
displayName4.call(nirnay,"hi")

// apply
displayName4.apply(mithilesh,['bye','good'])


let a = monty.displayName
let a1 = function(){
    console.log(this.firstName + this.lastName)
}
a1()















