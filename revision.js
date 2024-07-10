// let table = [1,2,3,4,5,6,7,8,9,10]
// let a = table.map(function(el,index,arr){
//     return el * 5
// })
// console.log(a)
// let a = table.map(function(el,index,arr){
//     return el + 1
// })
// console.log(a)

let marks = [10,20,30,40]
// let above30 = []

// for(let i = 0; i < marks.length; i++){
//     if(marks[i] >= 30){
//         above30.push(marks[i])
//     }
// }
// console.log(above30)

// let table = [1,2,3,4,5,6,7,8,9,10]
// let a1 = marks.filter(function(el,index,arr){
//     return el > 30
// })
// console.log(a1)

let transactions = [10,55,66,-77,-66,-10]
let deposit = transactions.filter(function(el,index,arr){
    return el > 0
})
console.log(deposit)
let withdrawal = transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(withdrawal)


let addNum = [20,30,40]
let total = 0
for(let i = 0; i < addNum.length; i++){
    total = total + addNum[i]
}
console.log(total)

let a11 = addNum.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(a11)
