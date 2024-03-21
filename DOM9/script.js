let buttonOne = document.querySelector('#one')
let inputText = document.querySelector('input')
let ullist = document.querySelector('ul')

buttonOne.addEventListener('click',function(){
    let text = inputText.value
    let newLi = document.createElement('li')
    newLi.textContent = text

    createButton("Remove",'remove',newLi)
    createButton("Up",'up',newLi)
    createButton("Down",'down',newLi)

    ullist.appendChild(newLi)
    inputText.value= ''
})