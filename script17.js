let names = ['monty','mithilesh','vedant']

let a = names[0]
let b = names[1]
let c = names[2]

console.log(a)
console.log(b)
console.log(c)

let [a1,b1,c1] = names
console.log(a1)
console.log(b1)
console.log(c1)

let cars = ['bmw','maruti','tata']
let [q1,,q2] = cars
console.log(q1)
console.log(q2)

let cities = [['Nagpur','Bhandara'],['Bhopal','Indore'],['kanpur','varanasi']]
let [[m11,m22],[m33,m34],[m44,m45]] = cities
console.log(m34)


let info = {
    firstName:"mithilesh",
    lastName:"badge"
}

let {firstName,lastName} = info
console.log(firstName)
console.log(lastName)

let Vehicle = {
    color:"black",
    type:"sedane"
}

let {color:cl,type:ty} = Vehicle
console.log(cl)
console.log(ty)

let info2 = {
    fullName:"mithilesh badge",
    parent:{
        mother:"preeti badge",
        father:"avinash badge"
    }
}

let {fullName,parent:{mother,father}} = info2
console.log(fullName)
console.log(mother)
console.log(father)

let students = [
    {
        fn:"Mithilesh",
        ln:"Badge"
    },
    {
        fn:"vedant",
        ln:"gaikwad"
    }
]

let[{fn:f1,ln:l1},{fn:f2,ln:l2}] = students
console.log(f1)
console.log(l1)
console.log(f2)
console.log(l2)

let info3 = {
    firstName:"monty",
    lastName:"badge",
    skills:["javascript","python"]
}

let {firstName:f3,lastName:l3,skills:[sub1,sub2]} = info3
console.log(f3)
console.log(l3)
console.log(sub1)
console.log(sub2)

















