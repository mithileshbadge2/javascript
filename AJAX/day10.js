let buttonA = document.querySelector('button')

function getUsers(PageNumber){
    fetch(`https://reqres.in/api/users?page=${PageNumber}`)
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(response){
        // console.log(response)
        response.data.forEach(element => {
            document.write(`<h1>${element.first_name}</h1>`)
            document.write(`<h1>${element.last_name}</h1>`)
            document.write(`<h1>${element.email}</h1>`)
            document.write(`<h1>${element.id}</h1>`)
            document.write(`<img src = ${element.avatar}>`)
        })
    })
}

buttonA.addEventListener('click',function(){
    getUsers(2)
})