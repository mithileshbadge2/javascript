let vishal = {
    firstName:"vishal",
    lastName:"kamble",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}
chinmay.displayName()
console.log(vishal.firstName)

let monty = {
    firstName:"monty",
    lastName:"badge"
}

let displayName2 = vishal.displayName
// bind
