let addLi = document.querySelectorAll('li')
let buttonA = document.querySelector('button')
let ulList = document.querySelector('ul')

// click
// buttonA.addEventListener('click',function(){
//     for(let i = 0;i<addLi.length;i++){
//         addLi[i].style.color='red'
//     }
// })

// dblclick
// buttonA.addEventListener('dblclick',function(){
//     for(let i = 0 ; i< addLi.length; i++){
//         addLi[i].style.color='red'
//     }
// })

//mouseover
// buttonA.addEventListener('mouseover',function(){
//     for(let i = 0; i< addLi.length; i++){
//         addLi[i].style.color='yellow'
//     }
// })

// ulList.addEventListener('mouseover',function(){
//     for(let i=0; i<addLi.length;i++){
//         addLi[i].textContent = addLi[i].textContent.toUpperCase()
//     }
// })

// ulList.addEventListener('mouseout',function(){
//     for(let i = 0; i< addLi.length; i++){
//         addLi[i].textContent= addLi[i].textContent.toLowerCase()
//     }
// })

//event bubbling concept
//reload
buttonA.addEventListener('click',function(){
    location.reload()
})