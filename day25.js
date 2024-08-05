class Calculator {

    // addition(x,y){
    //     console.log(x+y)
    // }

    // addition(x,y,z){
    //     console.log(x+y+z)
    // }

    // addition(x,y,z,a){
    //     console.log(x+y+z+a)
    // }

    addition(x = undefined, y = undefined, z = undefined, a = undefined) {
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

let a = new Calculator()
a.addition(10, 5)
a.addition(10, 5, 2)
a.addition(10, 5, 2, 1)


// Ducking typing 
// class Human {
//     talk(){
//         console.log("Hello hi")
//     }
// }

// class Duck {
//     talk(){
//         console.log("Quack Quack")
//     }
// }

// function printTalk(obj){
//     obj.talk()
// }

// h = new Human()
// d = new Duck()

// printTalk(h)
// printTalk(d)

// program 3

class Human {
    talk() {
        console.log("Hello hi")
    }
}

class Duck {
    talk() {
        console.log("Quack Quack")
    }
}
class Dog {
    bark() {
        console.log("Bow Bow")
    }
}

function printTalk(obj) {
    if (typeof obj.bark === 'function') {
        obj.bark();
    } else if (typeof obj.talk === 'function') {
        obj.talk();
    } else {
        console.log("No talk or bark method found");
    }
}

h = new Human()
d = new Duck()
e = new Dog()

// printTalk(h)
// printTalk(d)
printTalk(e)