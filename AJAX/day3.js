// p1
// function additionA(){
//     console.log("A")
// }
// function additionB(){
//     console.log("B")
// }
// additionA()
// additionB()

// p2
// function additionC(){
//     setTimeout(function(){
//         console.log("C is created")
//     },4000)
// }
// function additionD(){
//     console.log("D")
// }
// additionC()
// additionD()

// p3
// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//     },3000)
//     setTimeout(function(){
//         console.log("get id")
//     },2000)
//     setTimeout(function(){
//         console.log("get info")
//     },1000)
// }
// getInfo()

// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//         setTimeout(function(){
//             console.log("user id")
//             setTimeout(function(){
//                 console.log("user info")
//             },1000)
//         },2000)
//     },3000)
// }
// getInfo()

// promises
// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 10
//     if (a == b){
//         resolve("hello")
//     }
//     else{
//         reject("bye")
//     }
// })
// pro
// .then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("always execute")
// })

// pro
// .then(function(str){
//     console.log(str)
//     return "hi"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will execute")
// })

function userCreated(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },3000)
    })
}

function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user id")
        },2000)
    })
}

function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user info")
        },1000)
    })
}

// userCreated()
// .then(function(str){
//     console.log(str)
//     return getId()
// })
// .then(function(str){
//     console.log(str)
//     return getInfo()
// })
// .then(function(str){
//     console.log(str)
// })

async function getUserInfo(){
    let a = await userCreated()
    console.log(a)
    let b = await getId()
    console.log(b)
    let c = await getInfo()
    console.log(c)
}
getUserInfo()

























