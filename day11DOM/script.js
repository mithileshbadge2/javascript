let headOne = document.querySelector('h1')
let className = document.querySelector('.two')
let nameOne = document.querySelector('h1[name = "nm"]')
console.log(headOne)
console.log(className)
console.log(nameOne)

let firstE = document.querySelector('.fr')
console.log(firstE)

let nodeListOfFruits = document.querySelectorAll('.fr')
console.log(nodeListOfFruits)

let buttonA = document.querySelector('#clk')
// for(let i = 0; i < nodeListOfFruits.length; i++){
//     // console.log(nodeListOfFruits[i])
//     if(i % 2 == 0){
//         nodeListOfFruits[i].style.color = "red"
//     }
//     else {
//         nodeListOfFruits[i].style.color = "yellow"
//     }
// }
// buttonA.addEventListener('click',function(){
//     for(let i = 0; i< nodeListOfFruits.length;i++){
//         if(i % 2 == 0){
//             nodeListOfFruits[i].style.color = "pink"
//         }
//         else{
//             nodeListOfFruits[i].style.color = "green"
//         }
//     }
// })


//p2
let elementLi = document.querySelectorAll('li')
console.log(elementLi)

//p3
let veg = document.querySelector('#vegetables')
console.log(veg)

let veg2 = document.getElementById('vegetables')
console.log(veg2)

//p4
let nodeE = document.querySelectorAll('.veg')
console.log(nodeE)

let htmlC = document.getElementsByClassName('veg')
console.log(htmlC)

//p5
let allLiElementN = document.querySelectorAll('li')
let allLiElementH = document.getElementsByTagName('li')
console.log(allLiElementN)
console.log(allLiElementH)
