
let students = [
    {
        firstName: "chinmay",
        lastName: "deshpande",
        age: 12,
        skills: ["python", "javascript", "django"],
        city: "pune"
    },
    {
        firstName: "sarika",
        lastName: "pansare",
        age: 23,
        skills: ["python", "javascript", "cypress"],
        city: "mumbai"
    },
    {
        firstName: "amol",
        lastName: "rao",
        age: 25,
        skills: ["python", "html", "cypress"],
        city: "nagpur"
    },
    {
        firstName: "mayuri",
        lastName: "rao",
        age: 35,
        skills: ["testing", "html", "cypress"],
        city: "pune"
    }
]

for(let i = 0; i < students.length; i++){
    //console.log(students[i].firstName)
}

students.forEach(function(el){
    console.log(el.firstName)
})