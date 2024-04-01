class Calculator{
    addition(x,y){
        console.log(x+y)
    }

    addition(x,y,z){
        console.log(x+y+z)
    }

    addition(x,y,z,a){
        console.log(x+y+z+a)
    }

    addition(x,y,z,a){
        if(x != undefined && y != undefined && z != undefined && a != undefined){
            console.log(x+y+z+a)
        }
        else if(x != undefined && y != undefined && z != undefined){
            console.log(x+y+z)
        }
        else if(x != undefined && y != undefined){
            console.log(x+y)
        }

    }

}

let m = new Calculator()
m.addition(10,12)
m.addition(10,12,14)
m.addition(10,12,14,16)

// p2

class WorldBank{
    save(){
        console.log("I am save from worldBank")
    }
    loan(){
        console.log("I am loan method from worldBank")
    }
}

class SBI extends WorldBank{
    save(){
        console.log("I am save from SBIbank")
    }
    loan(){
        console.log("I am loan from SBIbank")
    }
}

class BOB extends WorldBank{
    save(){
        console.log("I am save from BOBbank")
    }
    loan(){
        console.log("i am loan from BOBbank")
    }
}

let sbi = new SBI()
sbi.loan()
sbi.save()

let bob = new BOB()
bob.save()
bob.loan()


