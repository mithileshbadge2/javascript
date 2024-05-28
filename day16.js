let info = ["mithilesh","badge",9168076805,24,38]

console.log(info[0])
info[0] = "monty"
console.log(info)
info.push("pune")
info.unshift("Mr")
info.pop()
info.shift()

info2 = ["ramesh",'rai','andheri',25,54]

info2 = {
    firstName:"amol",
    lastName:"rao",
    city:"pune",
    age:25,
    rollNo:54
}

console.log(info2.firstName)
console.log(info2['firstName'])
info2.firstName = "amol"
info2['age'] = 34
console.log(info2)

info2.language = "marathi"
info2['country'] = "india"
console.log(info2)

delete info2.firstName
delete info2['firstName']


let vehicle  ={
    color:"red",
    type:"sedane"
}

console.log(vehicle.color)
vehicle.color = "green"
vehicle.regNo = 124
delete vehicle.color