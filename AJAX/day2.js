// function additionA(){
//     console.log('A')
// }

// function additionB(){
//     console.log('B')
// }

// additionB()
// additionA()


// program 2


// function additionC(){
//     setTimeout(function(){
//         console.log("C")
//     },3000)
// }

// function additionD(){
//     console.log("D")
// }

// additionC()
// additionD()

// Program 3

function getInfo() {

    setTimeout(function () {
        console.log("user created")
    }, 3000)


    setTimeout(function () {
        console.log("getId")
    }, 2000)

    setTimeout(function () {
        console.log("getInfo")
    }, 1000)
}

//getInfo()

// asyn sync ----- call back hell
// function getInfo() {
//     setTimeout(function () {
//         console.log("user created")
//         setTimeout(function () {
//             console.log("getId")
//             setTimeout(function () {
//                 console.log("getInfo")
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getInfo()

// Promises

// promises

// pending , resolve , reject 
// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 10
//     if(a == b){
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }
// })
// // consuming the promise
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })


// program 2

// let pro2 = new Promise(function(resolve,reject){
//     let cities = ["Pune","Mumabi","nagpur","assam"]
//     if(cities.includes("Nagpur")){
//         resolve([10,20,30])
//     }
//     else {
//         reject([-10,-20,-30])
//     }
// })
// pro2
// .then(function(a){
//     console.log(a)
// })
// .catch(function(b){
//     console.log(b)
// })



// program 3
// let pro3 = new Promise(function(resolve,reject){
//     let c = [55,66,77]
//     if(c.includes(66)){
//         resolve("hello")
//     }
//     else{
//         reject("bye")
//     }
// })
// pro3
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("I will always execute")
// })


// //program 4

let pro4 = new Promise(function(resolve,reject){
    let a = 50
    let b = 50
    if(a == b){
        resolve("monty")
    }
    else{
        reject("badge")
    }
})

pro4
.then(function(str){
    console.log(str)
    return "monty2"
})
.then(function(str2){
    console.log(str2)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("I will always execute")
})