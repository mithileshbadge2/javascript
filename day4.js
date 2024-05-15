// console.log("Monty")

// //1-5
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

//1-10

//1-100

//1-100000

//loop

//function => repatative operation avoid

//loop => repetative operation perform based on condition

//1-5 

//for loop

// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }

// //5 time minskole
// for (let i = 1; i <= 5; i++) {
//     console.log("minskole")
// }

//===============================

//for loop => duration

//while loop => duration is not known

//syntax

//initialization
//while(condition){
//statemnets

//increament/decreament
//}


//1-5 print

// let i=1
// while(i<=5){
//     console.log(i)

//     i++
// }

//10-1
// let i = 10 //-==10
// while (i >= 1) { //10>=1 9>=1 0>=1
//     console.log(i) //10 9
//     i-- //9 8 0
// }

//8 table 
// let j = 8
// while (j <= 80) {
//     console.log(j)

//     j = j + 8
// }

//========================================

//break

//1-5  3  => 1 2 3
// let i = 1 
// while (i <= 5) { //1<=5 2<=5 3<=5
//     if (i == 3) { //1==3  2==3 3==3
//         break
//     }
//     console.log(i) //1 2

//     i++ //2 3
// }

//i=1


// let i = 1
// while (i <= 5) {
//     console.log(i) //1 2 3
//     if (i == 3) { 
//         break
//     }

//     i++ 
// }



//continue

//1-5 3  => 1 2 4 5

let i = 1 //1
while (i <= 5) { //1<=5 2<=5 3<=5 4<=5 5<=5 6<=5
    if(i==3){ //1==3 2==3 3==3 4==3 5==3
        i++ //4
        continue
    }
    console.log(i) //1 2 4 5
    i++ //2 3 5 6
}