// slice
let names = ["monty","mithilesh","vedant","nirnay","ajay"]
//console.log(names)
console.log(names.slice(2))
console.log(names.slice(-2))
console.log(names.slice(2,5))
console.log(names.slice(1,-1))
// splice
//               0        1       2         3         4
let country = ['dubai','india','vietnam','srilanka','indonesia']
country.splice(1,2)
//console.log(country)
country.splice(2,1)
console.log(country)
country.splice(3,4,"nagpur",'wardha','goa')
//console.log(country)

// fill        0  1  2  3  4  5
let numbers = [5,10,15,20,25,30]
let n = numbers.fill('@',0,3)
console.log(n)

// flat
let states = [['varanasi','lucknow'],['nagpur','bhandara'],['bhopal','indore']]
console.log(states[0][1])
console.log(states[1][0])
console.log(states[0])
let s1 = states.flat()
console.log(s1)

// sort()

let animals = ['Tiger','Lion','Monkey','Deer']
let a1 = animals.sort()
console.log(a1)

// at()
let a11 = [10,20,32,40,520,650]
let b11 = a11.indexOf(32)
console.log(b11)
let b12 = a11.at(3)
console.log(b12)

// join()
let teams = ['mi','csk','lsg','rj']
let t1 = teams.join(' ')
console.log(t1)

//reverse
let cars = ['tata','bmw','mercedes']
let c1 = cars.reverse()
console.log(c1)

//concat
let n1 = ['monty']
let n2 = ['avinash']
let n3 = ['badge']
let n4 = n1.concat((n2),(n3))
console.log(n4)





























