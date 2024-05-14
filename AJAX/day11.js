function getUsers(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response.data[0].id
    })
}

function getID(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response.data
    })
}

function renderHtml(element){
    document.write(`<h1>${element.first_name}</h1>`)
    document.write(`<h1>${element.last_name}</h1>`)
    document.write(`<h1>${element.email}</h1>`)
    document.write(`<h1>${element.id}</h1>`)
    document.write(`<img src = ${element.avatar}>`)
}

getUsers(1)
.then(function(id){
    return getID(id)
})
.then(function(element){
    renderHtml(element)
})

