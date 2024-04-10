// // sync
// function additionA(){
//     console.log("A")
// }

// function additionB(){
//     console.log("B")
// }
// additionA()
// additionB()

// // async
// function addC(){
//     setTimeout(function(){
//         console.log("C")
//     },3000)
// }
// function addD(){
//     setTimeout(function(){
//         console.log("D")
//     })
// }
// addC()
// addD()

// program
// function getInfo() {

//     setTimeout(function (){
//         console.log("user create")
//     },3000)

//     setTimeout(function (){
//         console.log("get id")
//     },2000)

//     setTimeout(function(){
//         console.log("user info")
//     },1000)
// }
// getInfo()

// call back hell
// async--call--synchronusly
// function getInfo(){
//     setTimeout(function (){
//         console.log("user created")
//         setTimeout(function (){
//             console.log("user id")
//             setTimeout(function(){
//                 console.log("user info")
//             },1000)
//         },2000)
//     },3000)
// }
// getInfo()

// promises

let pro = new Promise(function(resolve,reject){
    let a = 50
    let b = 50

    if(a == b){
        resolve("hello")
    }
    else {
        reject("bye")
    }
})

pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})