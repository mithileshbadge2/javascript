// let arr1 = [2, 5, 10, 20, 100]
// //10
// let y1 = arr1.map(function (el, index, arr) {
//     return el + 10
// })
// console.log(y1)


// let arr2 = [25, 10, 2, 100, 46, 33, 59, 300]
// //>50

// let y2 = arr2.filter(function (el,index,arr) {
//     return el > 50
// })
// console.log(y2)


//reduce()

// let marks = [2, 3, 4, 5, 6]

// let sum = 0 //2 //5 //9 //14 //20
// for (let i = 0; i < marks.length; i++) {
//     //console.log(i) //index
//     //console.log(marks[i]) //ele
//     sum = sum + marks[i]
// }
// console.log(sum)



// let marks = [2, 3, 4, 5, 6]
// let result = marks.reduce(function (acc, el, index, arr) {
//     return acc + el
// },0)
// console.log(result)

//=============================================

//forEach()

let names=["mithilesh","prashant","vaibhav","aruna"]


for(let i=0;i<names.length;i++){
   console.log("Welcome "+names[i] + ' !')
}


names.forEach(function(el,index,arr){
    console.log("Welcome "+el + " !")
})

//map()
//filter()
//reduce()
//forEach()