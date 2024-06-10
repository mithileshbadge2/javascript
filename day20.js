let firstName = "ramesh"
let lastName = 'raut'
let middleName = `ganesh`

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof middleName)

let names = ["ramesh","ganesh","rocky"]
names[0] = "shantanu"
console.log(names)

let city = "nagpur"
console.log(city[0])
//city[0] = "c"
console.log(city)

let cityA = "pune"
for(let i = 0; i < cityA.length; i++){
    console.log(cityA[i])
}

i2 = 0
while(i2 < cityA.length){
    console.log(cityA[i2])
    i2 = i2 + 1
}


let city2 = "mumbai"
for(let i = city2.length-1 ;i >= 0 ; i--){
    console.log(city2[i])
}


let firstNameA =  "mithilesh" 
let count = 0
for(let i = 0 ; i < firstNameA.length ; i++){
    if(firstNameA[i] == "a" || firstNameA[i] == "e" || firstNameA[i] == "i" || firstNameA[i] == "o" || firstNameA[i] == "u"){
        count = count + 1
    }
}
console.log(count)


let city3 = "pune"
let rev = ""
for(let i = 0 ; i < city3.length ; i++){
    rev = city3[i] + rev
}
console.log(rev)