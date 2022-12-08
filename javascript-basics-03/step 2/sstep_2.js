var showOrhide = document.querySelectorAll("a")
var p = document.querySelector("p");
showOrhide .forEach((event)=> {
    event.addEventListener("click", (event)=> {
        if(event.target.id == "show") {
            p.style = `display: block`
        } else {
            p.style = `display: none`
        }
    })
})