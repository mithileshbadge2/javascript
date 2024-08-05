// let ajay = {
//     firstName: "Ajay",
//     lastName: "Jawade",
//     age:23,
//     rollNo: 38
// }

// let ajju = {
//     firstName: "Ajju",
//     lastName: "Jawade",
//     age:23,
//     rollNo: 38
// }

// class Person {
//     firstName = undefined
//     lastName = undefined
//     age = undefined
//     rollNo = undefined
// }

// let ajayA = new Person()
// console.log(ajayA)

// ajayA.age = 25
// ajayA.city = "wardha"
// console.log(ajayA)

// // 

class Person {
    constructor(fn,ln,ag,rl){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rl
    }
}

let ajjuB = {
    firstName: "AjjuB",
    lastName: "JawadeB",
    age:23,
    rollNo: 38
}

let students = [
    new Person("Ajay","Jawade",20,35),
    new Person("AjayA","JawadeA",21,36),
    new Person("AjayB","JawadeB",22,37),
    new Person("AjayC","JawadeC",23,38)
]

students.forEach(function(el){
    console.log(el.firstName + el.lastName)
})

let total = students.reduce(function(acc,el){
    return acc + el.age
},0)
console.log(total / students.length)