let headOne= document.querySelector('h1')
console.log(headOne)
let buttonA = document.querySelector('button')

console.log(headOne.className)
headOne.classList.add('seven')
headOne.classList.remove('seven')
headOne.classList.toggle('three')
headOne.classList.toggle('three')

let a1 = headOne.getAttribute('id')
console.log(a1)
headOne.setAttribute('id',"nine")
headOne.setAttribute('name','monty')
headOne.setAttribute('class','four')
headOne.setAttribute('city','nagpur')
headOne.removeAttribute('city')

buttonA.addEventListener('click',function(){
    headOne.classList.toggle('green')
    headOne.classList.toggle('red')
})


