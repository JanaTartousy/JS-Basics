let shoe_size=prompt("enter your shoe size")
let shoe_exp = document.getElementById("shoe_size")
shoe_exp.value=shoe_size

let year =prompt("enter your birth")
let year_exp = document.getElementById("year")
year_exp .value=year
let validate_button =document.getElementById("validate").onclick=function (){
    alert( (((( shoe_size * 2) + 5 ) * 50 )- year )+ 1766 ); } 