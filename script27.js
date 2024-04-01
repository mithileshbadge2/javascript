// // inheritance
// class Student {
//     firstName = "monty"
//     lastName = "badge"
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends Student {
//     salary = 1000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// montyM = new Teacher()
// console.log(montyM.firstName)
// console.log(montyM.lastName)
// console.log(montyM.salary)
// montyM.displayName()
// montyM.displaySalary()

// // p2
// class StudentA {
//     constructor(fn,ln){
//         this.firstName = fn
//         this.lastName = ln
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class TeacherA extends StudentA {
//     salary = 2000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let montym = new TeacherA("monty","badge")
// console.log(montym.firstName)
// console.log(montym.lastName)
// console.log(montym.salary)
// montym.displayName()
// montym.displaySalary()

// // p3
// class StudentB {
//     constructor(fn,ln){
//         this.firstName = fn
//         this.lastName = ln
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class TeacherB extends StudentB {
//     constructor(fn,ln,salary){
//        super(fn,ln)
//        this.salary = salary
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let vedantV = new TeacherB("VedantV","gaikwadG",60000)
// console.log(vedantV.firstName)
// console.log(vedantV.lastName)
// console.log(vedantV.salary)
// vedantV.displayName()
// vedantV.displaySalary()

// p4

class StudentC {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class TeacherC extends StudentC {

    constructor(fn,ln,sl){
        super(fn,ln)
        this.salary = sl
    }
    displaySalary(){
        console.log(this.salary)
    }
}

class ProfessorC extends TeacherC {
    constructor(fn,ln,sl,sp){
        super(fn,ln,sl)
        this.specialization = sp
    }
    displayspec(){
        console.log(this.specialization)
    }
}

let TanmayA = new ProfessorC("tanmay","rode",5000,38)
console.log(this.firstName)
console.log(this.lastName)
console.log(this.salary)
console.log(this.specialization)
TanmayA.displayName()
TanmayA.displaySalary()
TanmayA.displayspec()
