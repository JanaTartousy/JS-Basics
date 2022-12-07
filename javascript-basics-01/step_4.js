let name = prompt("Enter your name");
let name_input = document.getElementById("name");
name_input.value= name 
let surname = prompt("Enter your surname");
let surname_input = document.getElementById("surname");
surname_input.value= surname 
let city = prompt("Enter your city");
let city_input = document.getElementById("city");
city_input.value= city 
alert( "name:" + " " + name + "\n" + "Surname:"  +" "+ surname + "\n" + "city:" +" "+city );
let validate_button =document.getElementById("validate").onclick=function (){
    alert( "Name:" + " "+ name + "\n" + "surname:" + " " + surname + "\n" +  "city:"+ "  "+ city)
}
