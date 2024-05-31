// let info = {
//     firstName : "Mithilesh",
//     lastName : "badge",
//     age : 24,
//     rollNo : 38
// }
// console.log(info['firstName'])
// info.firstName = 'monty'
// info.city = "nagpur"
// delete info['age']
// console.log(info)

let names = ['monty','shobhit','vedant']
for(let i = 0; i < names.length; i++){
    console.log(names[i])
}

let info2 = {
    firstName : "Mithilesh",
    lastName : "badge",
    age : 24,
    rollNo : 38
}
for(let x in info2){
    console.log(x,info2[x])
}

let vehicle = {
    color:"red",
    type:"sedane"
}
for(let x in vehicle){
    console.log(x,vehicle[x])
}

let students = [
    {
        firstName:"mithilesh",
        lastName:"badge"
    },
    {
        firstName:"vedant",
        lastName:"gaikwad"
    },
    {
        firstName:"shishir",
        lastName:'jain'
    }
]
for(let i = 0; i < students.length; i++){
    console.log(students[i].firstName + " " + students[i].lastName)
}

for(let i = 0; i < students.length; i++){
    students[i].language = "marathi"
}
console.log(students)

let info3 = {
    firstName:"Mithilesh",
    lastName:"Badge",
    parent:{
        mother:"Preeti Badge",
        father:"Avinash badge"
    }
}
info3.parent.mother = "Preeti A Badge"
console.log(info3)

info3.parent.sister = "kanyaka A Badge"
console.log(info3)
