let names = ['ramesh','suresh','ganesh','mangesh']
console.log(names)
names[0] = 'monty'
console.log(names)

names.push('mithilesh') //last
names.unshift('vedant') //first
console.log(names)

names.pop()
names.shift()
console.log(names)

let cities = ['nagpur','wardha','pune','goa']
let c = cities[0] 
console.log(c)

cities[1] = 'mumbai'
console.log(cities)

cities.push('mangalore')
cities.unshift('bangalore')
console.log(cities)

cities.pop()
cities.shift()
console.log(cities)

let fruits = ['mango','guava','apple','banana']
console.log(fruits)

let c1 = fruits.length
console.log(c1)

let veg = ['carrot','cabbage','brinjal','potato']
console.log(veg[3])

// for loop
for(let i = 0; i<= 4 ;i++){
    // console.log(i)
    console.log(veg[i])
}

let country = ['india','china','japan','srilanka']
for(let i = 0; i<= 4 ; i++){
    // console.log(i)
    console.log(country[i])
}