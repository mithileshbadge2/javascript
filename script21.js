// let monty = {
//     firstName:'monty',
//     lastName:'badge',
//     age:24,
//     rollNo:38
// }

// let vedant = {
//     firstName:'vedant',
//     lastName:"gaikwad",
//     age:23,
//     rollNo:35
// }

class Person {
    first_name = "monty"
    last_name = "badge"
    age = 24
    rollNo = 38

    display_name(){
        console.log(this.first_name + this.last_name)
    }
}

let montyA = new Person()
let vedantA = new Person()

console.log(montyA.first_name)
console.log(montyA.last_name)
console.log(montyA.age)
console.log(montyA.rollNo)
console.log(montyA)
montyA.display_name()
console.log(montyA)

montyA.first_name = "mithilesh"
montyA.last_name = "badge"
montyA.age = 23
montyA.rollNo = 56
console.log(montyA)

// with constructor
// class Person {
//     constructor(fn,ln,age,rollNo){
//         this.firstName = fn
//         this.lastName = ln
//         this.age = age
//         this.rollNo = rollNo
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let montyB = new Person("Mithilesh","badge","24","38")
// let vedantB = new Person("vedantB",'gaikwadB',50,60)
// vedantB.city = "nagpur"
// console.log(vedantB)

for(let key in montyA){
    console.log(key,montyA[key])
}

for(let key in Object.keys(montyA)){
    console.log(key)
}

for(let val in Object.values(montyA)){
    console.log(val)
}

for(let [k,v] in Object.entries(montyA)){
    console.log(k,v)
}