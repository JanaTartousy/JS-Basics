
let rgb = document.querySelectorAll(".color")
let p = document.querySelector("p")
rgb.forEach((event)=> {
    console.log(event)
    event.addEventListener("click", ()=> {
        let color = event.getAttribute("class").split(" ")[1]
        p.style = `color: ${color}`;
    })
})