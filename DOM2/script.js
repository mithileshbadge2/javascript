// let byTagName = document.querySelector('h1')
// console.log(byTagName)
// let byId = document.querySelector('#one')
// console.log(byId)
// let byClass = document.querySelector('.two')
// console.log(byClass)
// let byAttribute = document.querySelector('h1[id="one"]')
// console.log(byAttribute)

// byAttribute.addEventListener('click',function(){
//     byAttribute.textContent = "bye"
//     byAttribute.style.color = "green"
//     byAttribute.style.backgroundColor = "red"

// })

// console.log(byAttribute.textContent)

// let info = {
//     fullName : 'Mithilesh Badge',
//     parent:{
//         mother:"preeti badge",
//         father:"avinash badge"
//     }
// }
// console.log(info.parent.father)
// info.parent.father = 'avinash m badge'

// tagName
let byTagName = document.querySelector('h1')
console.log(byTagName)
// id 
let byid = document.querySelector('#one')
console.log(byid)
// class
let byClass = document.querySelector('.two')
console.log(byClass)
// attribute
// tagName[attribute="value"]
let byAttribute = document.querySelector('h1[id="one"]')
console.log(byAttribute)


byAttribute.addEventListener('click',function(){
    byAttribute.style.color = "purple"
    byAttribute.style.backgroundColor= "skyblue"
    
})



