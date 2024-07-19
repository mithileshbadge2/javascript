//set and get keyword
let info = {
    firstName:'mithilesh',
    lastName:'badge'
}
info.firstName = 'monty'
console.log(info)

class PersonD{
    set firstN(fn){
        this.firstName = fn
    }

    set lastN(ln){
        this.lastName = ln
    }

    get firstN(){
        return this.firstName
    }

    get lastN(){
        return this.lastName
    }
}

let MithileshD = new PersonD()
MithileshD.firstN = "Mithilesh D"
MithileshD.lastN = "Badge D"
console.log(MithileshD)

console.log(MithileshD.firstN)
console.log(MithileshD.lastN)

//p5
class Bank{
    constructor(firstName,lastName,bal){
        this.firstName = firstName
        this.lastName = lastName
        this.bal = bal
        this.transactions = []
    }

    withdrawl(amt){
        if(this.bal > amt){
            this.bal = this.bal - amt
            this.transactions.push(-amt)
            return this.bal
        }
        else{
            console.log("Insufficient Balance")
        }
    }

    deposit(amt){
        this.bal = this.bal + amt
        this.transactions.push(amt)
        return this.bal
    }

    lastFiveTransactions(){
        return this.transactions.slice(-5)
    }
}

let MithileshB = new Bank("MithileshB", "BadgeB", 50000)
MithileshB.withdrawl(500)
MithileshB.deposit(500)
MithileshB.deposit(500)
MithileshB.withdrawl(500)
MithileshB.deposit(50)
MithileshB.deposit(100)
MithileshB.withdrawl(1500)
MithileshB.deposit(2000)
console.log(MithileshB.transactions)
console.log(MithileshB.lastFiveTransactions())
