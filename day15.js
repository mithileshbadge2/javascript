let birthYear = [1990,1991,1992,1993]
let newArr = birthYear.map(function(el,index,arr){
    return 2024 - el
})
console.log(newArr)

let numbers = [11,22,33,44,55]
let numArrB = numbers.map(function(el){
    return el + 10
})
console.log(numArrB)


let transaction = [555,-100,11,22,33,-87,-98]
let newArrC = transaction.filter(function(el){
    return el > 0
})
console.log(newArrC)

let newArrD = transaction.filter(function(el){
    return el < 0
})
console.log(newArrD)

let marks = [100,200,300,400,500]
let newArrE = marks.filter(function(el){
    return el > 100
})
console.log(newArrE)

let arr = [10,20,30]
let newArrF = arr.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(newArrF)

city = ['nagpur','pune','bangalore','kanpur']
city.forEach(function(el,index,arr){
    console.log('welcome' + el)
})

let marksA = [35,45,55,65,75,85]
// let above50 = marksA.filter(function(el){
//     return el > 50
// })
// console.log(above50)
let above50A = marksA.find(function(el,index,arr){
    return el > 50
})
console.log(above50A)

let above50B = marksA.findIndex(function(el,index,arr){
    return el > 50
})
console.log(above50B)

let marksB = [30,40,50,60,70,10,20]
let a = marksB.every(function(el,index,arr){
    return el > 50
})
console.log(a)

let b = marksB.some(function(el,index,arr){
    return el > 50
})
console.log(b)

















