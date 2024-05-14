// ternary 
let q = 8 
let r = 4
q > r ? console.log('q is greater'):console.log("r is greater")

let  age = 19
//age >= 18 ? console.log("can drive"):console.log("cannot drive")
let a = age >= 18 ? "can drive":"cannot drive"
console.log(a)

// switch case without break
let city = "bhopal"
switch(city){
    case "pune":
        console.log("MH")
    case "jaipur":
        console.log("RJ")
    case "kanpur":
        console.log("UP")
    case "bhopal":
        console.log("MP")
    default:
        console.log("Incorrect city name")
}

let city2 = "Jaipur"
switch(city2){
    case "nagpur":
        console.log("MH")
        break
    case "kanpur":
        console.log("UP")
        break
    case "jaipur":
        console.log("RJ")
        break
    case "bhopal":
        console.log("MP")
        break
    default:
        console.log("Incorrect city name")
}

let city3 = "jaipur"
switch(city3){
    case "nagpur":
    case "mumbai":
        console.log("MH")
        break
    case "bhopal":
    case "indore":
        console.log("MP")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    default:
        console.log("incorrect city name")
}

let a1 = 1000
let a2 = 40000
let a3 = 500000

if(a1 > a2 && a1 > a3){
    console.log("a1 is greater")
}
else if(a2 > a1 && a2 > a3){
    console.log("a2 is greater")
}
else {
    console.log("a3 is greater")
}

let flag = true
switch(flag){
    case a1 > a2 && a1 > a3:
        console.log("a1 is greater")
        break
    case a2 > a1 && a2 > a3:
        console.log("a2 is greater")
        break
    default:
        console.log("a3 is greater")
}
