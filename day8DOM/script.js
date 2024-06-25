let addButton = document.querySelector('#addButton')
let inputElement = document.querySelector('input')
let ullist = document.querySelector('ul')

addButton.addEventListener('click',function(){
    let text = inputElement.value
    let newLi = document.createElement('li')
    newLi.textContent = text
    ullist.appendChild(newLi)
    createButton(newLi)
    inputElement.value = ""
})

function createButton(li){
    let remove = document.createElement('button')
    remove.classList.add('remove')
    remove.textContent = 'Remove'
    li.appendChild(remove)

    let up = document.createElement('button')
    up.classList.add('up')
    up.textContent = 'Up'
    li.appendChild(up)

    let down = document.createElement('button')
    down.classList.add('down')
    down.textContent = 'Down'
    li.appendChild(down)
}




