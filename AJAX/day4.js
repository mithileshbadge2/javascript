// // function getInfo(){
// //     setTimeout(function(){
// //         console.log('user created')
// //     },3000)

// //     setTimeout(function(){
// //         console.log('user id')
// //     },2000)

// //     setTimeout(function(){
// //         console.log('user info')
// //     },1000)
// // }
// // getInfo()

// // function userCreated(){
// //     return new Promise(function(resolve,reject){
// //         setTimeout(function(){
// //             resolve("user created")
// //         },3000)
// //     })
// // }

// // function userId(){
// //     return new Promise(function(resolve, reject){
// //         setTimeout(function(){
// //             resolve('get id')
// //         },2000)
// //     })
// // }

// // function UserInfo(){
// //     return new Promise(function(resolve,reject){
// //         setTimeout(function(){
// //             resolve('get info')
// //         },1000)
// //     })
// // }

// // userCreated()
// // .then(function(str){
// //     console.log(str)
// //     return userId()
// // })
// // .then(function(str){
// //     console.log(str)
// //     return UserInfo()
// // })
// // .then(function(str){
// //     console.log(str)
// // })

// // async await

// // async function UserInfoA(){
// //     let a = await userCreated()
// //     console.log(a)
// //     let b = await userId()
// //     console.log(b)
// //     let c = await UserInfo()
// //     console.log(c)
// // }
// // UserInfoA()

// // promise combination
// // Promise.all()
// // Promise.allSettled()
// // Promise.race()
// // Promise.any()

// // promise all returns all arrays
// // Promise.all([
// //     Promise.resolve('hello'),
// //     Promise.resolve('bye'),
// //     Promise.resolve('hello a')
// // ])
// // .then(function(arr){
// //     console.log(arr)
// // })
// // .catch(function(){
// //     console.log('all not resolved')
// // })

// // promise allsettled returns all arrays with sta&val
// // Promise.allSettled([
// //     Promise.reject('hello'),
// //     Promise.resolve('bye'),
// //     Promise.resolve("hello bye")
// // ])
// // .then(function(arr){
// //     console.log(arr)
// // })

// // Promise.race() only one will execute hello or bye

// function proOne(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("hello")
//         },3000)
//     })
// }

// function proTwo(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("bye")
//         },2000)
//     })
// }
// Promise.race([
//     proOne(),
//     proTwo()
// ])
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })











