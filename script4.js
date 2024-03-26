//switch case 

let city = "Pune"
 switch(city){
    case "Pune":
         console.log("MH")
    case "Jaipur":
         console.log("RJ")
    case "Bhopal":
         console.log("MP")
    default:
         console.log("Incorrect city")
}


 let cities = "nagpur"
 switch(cities){
    case "nagpur":
         console.log("MH")
         break
    case "Jaipur":
         console.log("RJ")
         break
    case "Bhopal":
         console.log("MP")
         break
    default:
         console.log("Incorrect city")
 }


 let sheher = "Mumbai"
 switch(sheher){
     case "Mumbai":
     case "Nagpur":
         console.log("MH")
         break
     case "Jaipur":
     case "Udaipur":
         console.log("RJ")
         break
     case "Bhopal":
     case "Indore":
         console.log("MP")
         break
     default:
         console.log("Incorrect city")
 }


 let x1 = 9
 let x2 = 4
 let x3 = 1
 let isGreatest = true
 switch(isGreatest){

     case x1 > x2 && x1 > x3:
         console.log("x1 is greater")
         break
     case x2 > x1 && x2 > x3:
         console.log("x2 is greater")
         break 
     default:
         console.log("x3 is greater")

 }


