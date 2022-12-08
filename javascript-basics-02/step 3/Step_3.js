let div = document.createElement("div")
document.querySelector("body").appendChild(div).setAttribute("id", "other_div")
let seconddiv = document.querySelector("#other_div")
let nameInput = document.querySelector("#name")
nameInput.addEventListener("keyup", (event)=> {
    seconddiv.innerText = nameInput.value;
})