let students = [
    {
        firstName:"mithilesh",
        lastName:"badge",
        age:24,
        rollNo:38
    },
    {
        
        firstName:"vedant",
        lastName:"gaikwad",
        age:23,
        rollNo:25

    },
    {
        firstName:"nirnay",
        lastName:"sangolkar",
        age:23,
        rollNo:35

    },
    {
        firstName:"sushant",
        lastName:"poche",
        age:24,
        rollNo:55
    }

]
students.forEach(function(el,index,arr){
    console.log(el.firstName + " "+ el.lastName)
})


students.forEach(function(el){
    if(el.age > 30){
        console.log(el.firstName + el.lastName)
    }
})

students.forEach(function(el){
    el.country = "hindustan"
})
console.log(students)


students.forEach(function(el){
    el.skills = ["javascript"]
})
console.log(students)

students.forEach(function(el){
    el.skills.push("css")
})
console.log(students)