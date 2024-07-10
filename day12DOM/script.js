let headOne = document.querySelector('.two')
console.log(headOne.className)
headOne.className = 'three'

headOne.classList.add('four')
headOne.classList.remove('three')
headOne.classList.toggle('three')

// headOne.removeAttribute('id')
// console.log(headOne)

let getid = headOne.getAttribute('id')
console.log(getid)

headOne.setAttribute('data-cy',"cypressB")
console.log(headOne)