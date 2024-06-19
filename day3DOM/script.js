let byTagName = document.querySelector('h1')
console.log(byTagName)

let byId = document.querySelector('#one')
console.log(byId)

let byClassName = document.querySelector('.two')
console.log(byClassName)

let byAttribute = document.querySelector('h1[id = "one"]')
console.log(byAttribute)

byAttribute.addEventListener('click',function(){
    byAttribute.style.color = 'blue'
    byAttribute.style.backgroundColor = 'red'
})




