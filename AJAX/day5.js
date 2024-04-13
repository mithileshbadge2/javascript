// // promise all returns all arrays
// Promise.all([
//     Promise.resolve('hello'),
//     Promise.resolve('bye'),
//     Promise.resolve('hello a')
// ])
// .then(function(arr){
//     console.log(arr)
// })
// .catch(function(){
//     console.log('all not resolved')
// })

// // promise allsettled returns all arrays with sta&val
// Promise.allSettled([
//     Promise.reject('hello'),
//     Promise.resolve('bye'),
//     Promise.resolve("hello bye")
// ])
// .then(function(arr){
//     console.log(arr)
// })

// // // Promise.race() only one will execute hello or bye

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

// promise.any() only resolve first function execute
Promise.any([
    Promise.resolve('hello'),
    Promise.reject('hello2'),
    Promise.resolve('bye'),
    Promise.resolve('bye2')
])
.then(function(str){
    console.log(str)
})
