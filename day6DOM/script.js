let buttonA = document.querySelector('button')
console.log(buttonA)
let headOne = document.querySelector('h1')
console.log(headOne)
let inputText = document.querySelector('input')
console.log(inputText)

buttonA.addEventListener('click',function(){
    let color = inputText.value
    headOne.style.color = color
    inputText.value = ""
})


