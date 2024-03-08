let info = ['monty','badge',9168076805,38]
let info2 = {
    firstName : 'monty',
    lastName : 'badge',
    mobileNo : 9168076805,
    rollNo : 38
}
console.log(info2)
console.log(info2.firstName)     //retrive
console.log(info2['firstName'])
// update
info2.firstName = "mithilesh"
//console.log(info2)
info2['firstName'] = 'avinash'
console.log(info2)
info2.rollNo = 68
console.log(info2)
//info2['rollNo'] = 68
//console.log(info2)

// delete
delete info2.mobileNo
delete info2['lastName']
console.log(info2)


vehicle = {
    color : 'red',
    type : 'sedan'
}
console.log(vehicle.type)
vehicle.color = "blue"
console.log(vehicle)
vehicle['color'] = 'green'
console.log(vehicle)
vehicle.regNo = '12345'
console.log(vehicle)
delete vehicle.color
console.log(vehicle)

let names = ['monty','vedant','nirnay','shsihir','ajay']
console.log(names)
console.log(names[0])
for(let i = 0;i < names.length; i++ ){
    //console.log(i)
    console.log(names[i])
}
for(let i = names.length -1; i > -1; i--){
    //console.log(i)
    console.log(names[i])
}















