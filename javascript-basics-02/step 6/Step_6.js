let image = document.querySelectorAll("img")

image.forEach((event)=> {
    event.addEventListener("mouseover", (event)=> {
        event.target.src = `images/${event.target.id}_2.jpg`
    })

event.addEventListener("mouseout", (event)=> {
    event.target.src = `images/${event.target.id}.jpg`
})
}) 