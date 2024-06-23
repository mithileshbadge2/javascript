let ulList = document.querySelector('ul')
console.log(ulList)
let buttonB = document.querySelector('button')
console.log(buttonB)
let inputText = document.querySelector('input')
console.log(inputText)

buttonB.addEventListener('click',function(){
    let txt = inputText.value
    let newLi = document.createElement('li')
    newLi.textContent = txt
    ulList.appendChild(newLi)
    inputText.value = ""
})


