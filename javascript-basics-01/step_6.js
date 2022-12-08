let x =prompt("enter your first number")
let first_number = document.getElementById("first_number")
first_number.value=x

let y =prompt("enter your second number")
let second_number = document.getElementById("second_number")
second_number.value=y
let validate_button =document.getElementById("validate").onclick=function (){
    alert( x% y)
}