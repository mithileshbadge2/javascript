let names = ['raju','kaju','badam','beetroot']
// let a = names.reverse()
// console.log(a)

let b = names.sort()
console.log(b)

let details = ["mahesh",'babu',8798653221]
let c = details.join("-")
console.log(c)

let d = ['mithilesh']
let e = ['Badge']
let f = d.concat(e)
console.log(f)

let phones = ['vivo','oppo','samsung','iphone','oneplus','motorola']
console.log(phones.slice(0,4))
console.log(phones.slice(-1))

let phonesB = ['vivo','oppo','samsung','iphone','oneplus','motorola']
// phonesB.splice(3,1)
phonesB.splice(1,2,"nokia",'redmi')
console.log(phonesB)

let numbers = [[11,22],[33,44],[55,66]]
console.log(numbers[0][1])
let m = numbers.flat()
console.log(m)
