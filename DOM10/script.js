ulList.addEventListener('click',function(event){
    console.log(event.target)
    console.log(event.target.tagName)
    console.log(event.target.className)

    if(event.target.tagName == "BUTTON"){

        if(event.target.className === "remove"){
            let li = event.target.parentElement
            let ulList = li.parentElement
            ulList.removeChild(li)
        }
        else if(event.target.className === "up"){

            let li = event.target.parentElement
            let ulList  = li.parentElement
            let prev = li.previousElementSibling
            if(prev){
                ulList.insertBefore(li,prev)
            }

        }

        else if(event.target.className === "down"){

            let li = event.target.parentElement
            let ulList  = li.parentElement
            let next = li.nextElementSibling
            if(next){
                ulList.insertBefore(next,li)
            }


        }




    }


})