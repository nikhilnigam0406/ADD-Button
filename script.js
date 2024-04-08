let istatus =  document.querySelector("h5")

var btn = document.querySelector("#add")
// var remove= document.querySelector("#remove")

var check  = 0

btn.addEventListener("click", function(){
    if(check ==0){
        istatus.innerHTML = "Friend "
        istatus.style.color = "green"
        // console.log("ksksmdns")
        check = 1;
        btn.innerHTML = ("Remove Friend")
    
    }
    else{
        check = 0;
        istatus.innerHTML = "Add Friend"
        istatus.style.color = "red"
        btn.innerHTML = ("Add Friend")
    }   
   
})

// remove.addEventListener("click", function(){
//     istatus.innerHTML = "Remove"
//     istatus.style.color = "red" 

// })  
