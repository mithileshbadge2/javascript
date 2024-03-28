let info = {
    first_name :"monty",
    last_name : "badge"
}
info["first_name"] = "mithilesh"
info.city = "nagpur"
console.log(info)

class PersonD {
    set fn(fn){
        this.firstName = fn
    }
    get fn(){
        return this.fn
    }
    set ln(ln){
        this.lastName = ln
    }
    get ln(){
        return this.ln
    }
}

let shivam = new PersonD()
shivam.fn = "shivam"
shivam.ln = "dube"
console.log(shivam)