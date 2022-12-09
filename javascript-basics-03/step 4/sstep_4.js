let pass = document.getElementById("#password")
let confirm = document.getElementById("#confirmation")
let button = document.querySelector("button")
button.addEventListener("click", (e)=>{
    if(password.value = confirmation.value) {
        let border = "1px solid red";
        password.style.border = border;
        confirmation.style.border = border;
    }
})