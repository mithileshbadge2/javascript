// for loop

for (let i = 0; i <= 5; i++) {
    console.log(i)
}
for (let i = 2; i <= 20; i = i + 2) {
    console.log(i)
}
for (let i = 5; i <= 50; i = i + 5) {
    console.log(i)
}
for (let i = 50; i >= 5; i = i - 5) {
    console.log(i)
}
for (let i = 1; i <= 3; i++) {
    console.log("hello")
}
for (let i = 1; i <= 3; i++) {
    console.log(i)
}

// --------------------------------
for (let i = 1; i <= 5; i++) {
    console.log(i)
    if (i == 3) {
        break
    }
}

for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        break
    }
    console.log(i)
}

for(let i = 5; i >= 1; i--){
    console.log(i)
    if(i == 3){
        break
    }
}

for(let i = 20; i >= 2; i= i - 2){
    if(i == 10){
        break
    }
    console.log(i)
}

// ------------------------------------
// for => continue

for(let i = 0; i <= 6; i ++){
    if(i == 3){
        continue
    }
    console.log(i)
}