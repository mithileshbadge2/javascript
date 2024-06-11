let firstName = "vedant"
a = firstName.toUpperCase()
console.log(a)

let lastName = "BADGE"
b = lastName.toLowerCase()
console.log(b)

let city = "Mumbai"
let c = city.toUpperCase().toLowerCase().length
console.log(c)

let fruits = "apple mango banana chikoo grapes"
let d = fruits.includes('m')
let e = fruits.includes('Mango')
console.log(d)
console.log(e)

let area = "gaddigodam"
f = area.indexOf('g')
g = area.indexOf('G')
console.log(f)
console.log(g)

let city3 = "gaddigodam"
console.log(city3.slice(0))
console.log(city3.slice(0,5))
console.log(city3.slice(-8,-3))

let e1 = "I am learning javascript and playwright" 
let e2 = e1.replace("javascript","cypress")
console.log(e2)

let info = "I am learning js"
let a1 = info.concat(" and python")
console.log(a1)
console.log(info)

reverse = ["ramesh","suresh","mangesh","kunal"]
let r = reverse.reverse()
console.log(r)
console.log(reverse)

let nam = ["ramesh","suresh","mangesh","kunal"]
let sorting = nam.sort()
console.log(sorting)
console.log(nam)

let fullName = "Mithilesh Avinash Badge"
let fn = fullName.split(" ")
let fn1 = fullName.split("a")
console.log(fn)
console.log(fn1)

let shortName = "monty badge"
let a11 = shortName.startsWith("mon")
let a12 = shortName.startsWith("bad")
console.log(a11)
console.log(a12)

a13 = shortName.endsWith("dge")
a14 = shortName.endsWith('e')
console.log(a13)
console.log(a14)

let cit = " mumbai "
let a15 = cit.trimStart()
console.log(a15)

let cit2 = "goa "
let a16 = cit2.trimEnd()
console.log(a16)

let cit3 = " indore "
let a17 = cit3.trim()
console.log(a17)

let a111 = "monty"
let a18 = a111.charAt(4)
console.log(a18)

a19 = a111.charCodeAt(4)
console.log(a19)




