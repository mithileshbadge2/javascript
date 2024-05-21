let birthYear = [1969,1970,1971,1972]
let ages = []
for(let i = 0; i < 4; i ++){
    let a = 2024 - birthYear[i]
    ages.push(a)
}
console.log(ages)

birthYear = [1969,1970,1971,1972]
let a1 = birthYear.map(function(el,index,arr){
    return 2024 - el
})
console.log(a1)

let numbers = [10,20,30,40]
let a2 = numbers.map(function(el,index,arr){
    return el + 2
})
console.log(a2)


let numbersA = [11,22,55,66,77]
let above50 = []
for(let i = 0; i < numbersA.length; i++){
    if(numbersA[i] > 50){
        above50.push(numbersA[i])
    }
}
console.log(above50)

numbersA = [11,22,55,66,77]
let a3 = numbersA.filter(function(el,index,arr){
    return el > 50
})
console.log(a3)

let numbersB = [11,22,33,11,22,33,44,44]
let a4 = numbersB.filter(function(el,index,arr){
    return el % 2 == 0
})
console.log(a4)

let numbersC = [11,22,33]
total = 0
for(let i = 0; i < numbersC.length; i++){
    total = total + numbersC[i]
}
console.log(total)
