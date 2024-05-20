let birthYear = [1999,2000,2001,2002]
let ages = []
for(let i = 0; i < 4; i++){
    // console.log(i)
    // console.log(birthYear[i])
    console.log(2024 - birthYear[i])
    let a = 2024 - birthYear[i]
    ages.push(a)
}
console.log(ages)

let marks = [77,55,44,33]
let above50 = []
for(let i = 0; i < 4; i++){
    if(marks[i]>= 50){
        above50.push(marks[i])
    }
}
console.log(above50)

let cities = ['nagpur','pune','goa']
for(let i = 0; i < 3; i ++){
    console.log('welcome'+cities[i])
}

let numbers = [10,20,30]
let total = 0
for(let i = 0; i < 3;i++){
    total = total + numbers[i]
}
console.log(total)