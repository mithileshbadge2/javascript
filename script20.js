let roles = new Map()
let roles2 = new Map([
    [1,"admin"],
    [2,'manager'],
    [3,"customer"]
])
console.log(roles2)

let q1 = roles2.size
console.log(q1)

roles2.set(4,"employee")
console.log(roles2)

let q2 = roles2.get(3)
console.log(q2)

let q3 = roles2.has(3)
console.log(q3)

roles2.clear()
console.log(roles2)

roles2 = new Map([
    [1,"Monty"],
    [2,"vedant"],
    [3,'shishir']
])
roles2.delete(1)
console.log(roles2)
let m1 = roles2.set(1,"monty")
console.log(m1)
let m2 = roles2.get(3)
console.log(m2)
let m3 = roles2.has(2)
console.log(m3)
// roles2.clear()
// console.log(roles2)
// roles2.delete(1)
// console.log(roles2)
roles2.forEach(function(v,k){
    console.log(v,k)
})

for(let key of roles2.keys()){
    console.log(key)
}

for(let val of roles2.values()){
    console.log(val)
}

for(let [k,v] of roles2.entries()){
    console.log(k,v)
}

roles2.set(4,"mithilesh")
console.log(roles2)

let names = ['monty','mithilesh','vedant','ajay']
console.log(names)

let names2 = new Set()
console.log(names2)

let names3 = new Set(['arun','varun','vishal','ram'])
console.log(names3)

names3.add('shobhit')
console.log(names3)


let m4 = names3.has('varun')
console.log(m4)

names3.delete('varun')
console.log(names3)

names3.forEach(function(n1){
    console.log(n1)
})

let students = new Set([
    {firstName:"monty",lastName:"badge"},
    {firstName:"mithilesh",lastName:"badge"}
])
for(let key of students.keys()){
    console.log(key)
}

for(let val of students.values()){
    console.log(val)
}

for(let [k,v] of students.entries()){
    console.log(k,v)
}

// let students = new Set([
//     {firstName:"sarika",lastName:"pansare"},
//     {firstName:"poorva",lastName:"vyas"}
// ]) 



// for(let key of students.keys()){
//     console.log(key)
// }
// for(let key of students.values()){
//     console.log(key)
// }
// for(let [k,v] of students.entries()){
//     console.log(k,v)
// }








