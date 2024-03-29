class Calculator {
    addition(x,y){
        console.log(x+y)
    }
    addition(x,y,z){
        console.log(x+y+z)
    }
    addition(x,y,z,a){
        console.log(x+y+z+a)
    }

    addition(x, y, z, a) {
        if (x != undefined && y != undefined && z != undefined && a != undefined) {
            console.log(x + y + z + a)
        }
        else if (x != undefined && y != undefined && z != undefined) {
            console.log(x + y + z)
        }
        else if (x != undefined && y != undefined) {
            console.log(x + y)
        }
    }
}


a = new Calculator()
a.addition(13,3)
a.addition(13,3,5)
a.addition(13,3,5,4)

console.log(undefined + 3)
console.log(undefined + "add")

// method over riding

class WorldBank {
    save(){
        console.log("I am save method from worldbank")
    }
    loan(){
        console.log("I am loan method from world bank")
    }
}

class SBI extends WorldBank {
    save(){
        console.log("I am save method from SBI")
    }
    loan(){
        console.log("I am loan method from SBI")
    }
}

class PNB extends WorldBank{
    save(){
        console.log("I am save method from PNB")
    }
    loan(){
        console.log("I am loan method from PNB")
    }
}

let nagpur = new SBI()
nagpur.save()
nagpur.loan()

let nagpurA = new PNB()
nagpurA.loan()
nagpurA.save()






