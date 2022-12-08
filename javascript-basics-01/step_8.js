var age =prompt("enter your age")
var age_exp = document.getElementById("age")
age_exp.value=age


document.getElementById("validate").addEventListener("click", function () {
    var age = document.getElementById("age").value;
    if (age < 18) {
      alert("you are under 18")
  } else{
      alert("you are over 18");
  }
  });