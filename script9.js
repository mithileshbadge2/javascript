let names = ['mithilesh','vedant','shishir','shobhit','rounak']
let q1 = names.push('nirnay')
console.log(q1)
//console.log(names)

let q2 = names.unshift('monty')
console.log(q2)
console.log(names)

for(let i = 0; i < names.length; i++){
    //console.log(i)
    console.log(names[i])
}

let cities = ['nagpur','mumbai','indore','pune']
//console.log(cities)
cities[0] = 'shimla'
console.log(cities)
console.log(typeof(cities))
for(let i = 0; i <cities.length;i++){
    //console.log(i)
    console.log(cities[i])
}
let sheher = ['nagpur','mumbai','indore','pune']
//let c = sheher.unshift('khamla')
//console.log(sheher)
//let c1 = sheher.pop('pune')
//console.log(sheher)
//let c2 = sheher.pop()
//console.log(c2)
//console.log(sheher)
let clubs = ['madrid','barca','bayern','inter','milan']
console.log(clubs)
for(let i = 0; i < clubs.length;i++){
    //console.log(i)
    console.log(clubs[i])
}

let fruits = ['grapes','mango','banana','apple']
let f1 = fruits.shift()
//console.log(f1)
console.log(fruits)

let cars = ['bmw','maruti','tata','volkswagan']
console.log(cars)
for(let i = 0; i < cars.length;i++){
    //console.log(i)
    console.log(cars[i])
}

let c2 = cars.indexOf('sedan')
console.log(c2)
let c3 = cars.indexOf('maruti')
console.log(c3)
let c4 = cars.concat('mercedes')
console.log(c4)
console.log(cars)
let c5 = cars.includes('tata')
console.log(c5)
let c6 = c4.reverse('')
console.log(c6)

let school = ['sda','cds','sfs','john']
let s1 = school.at(2)
console.log(s1)

let o = ['antartic','pacific','indian','artic']
let b = ['argentina','africa','nagpur','brazil']

let ob1 = o.concat(b)
console.log(ob1)
//console.log(o)

let data = ['monty','badge',8329098875]
let d1 = data.join('+')
console.log(d1)
let d2 = data.join('#')
console.log(d2)


let birthYear = ['1998','1999','2000','2001']
let ages = []
for(let i = 0; i < birthYear.length;i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2024 - birthYear[i])
    let x = 2024 - birthYear[i]
    ages.push(x)
}
console.log(ages)

let marks = ['10','20','30','51','60','70']
let above50 = []
for(let i = 0;i < marks.length;i++){
    //console.log(i)
    //console.log(marks[i])
    if(marks[i] > 50){
        //console.log(marks[i])
        above50.push(marks[i])
    }
}
console.log(above50)
let grades = ['10','50','60','55','65']
console.log(typeof(grades))
let above60 = []
for(let i = 0;i < grades.length;i++){
    //console.log(i)
    console.log(grades[i])
    if (grades[i] > 50){
        above60.push(grades[i])
    }
}
console.log(above60)













































































