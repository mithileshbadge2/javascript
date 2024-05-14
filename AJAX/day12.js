function getUserbyId(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            //console.log(response.data)
            return response.data
        })
}

function raceP(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('refresh')
        },1)
    })
}


function renderHtml(element) {
    document.write(`<h1>${element.first_name}<h1>`)
    document.write(`<h1>${element.last_name}<h1>`)
    document.write(`<h1>${element.email}<h1>`)
    document.write(`<h1>${element.id}<h1>`)
    document.write(`<img src = ${element.avatar}>`)
}

// Promise.all([
//     getUserbyId(1),
//     getUserbyId(2),
//     getUserbyId(3)
// ])
// .then(function(users){
//     console.log(users) // users ----> obj
//     users.forEach(function(element){
//         renderHtml(element)
//     })
// })
// .catch(function(err){
//     console.log(err)
// })

// promise.allSettled

// Promise.allSettled([
//     getUserbyId(3),
//     getUserbyId(2),
//     getUserbyId(111)
    
// ])
// .then(function(arr){
//     console.log(arr)
// })

// Promise.race
// Promise.race([
//     getUserbyId(2),
//     raceP()
// ]).then(function(str){
//     console.log(str)
// })

// Promise.any()

Promise.any([
    Promise.reject("bye"),
    raceP(),
    getUserbyId(2)
])
.then(function(str){
    console.log(str)
})