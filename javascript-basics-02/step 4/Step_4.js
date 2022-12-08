document.querySelector("[name='button']").onclick = function () {
    let choose = prompt(
      "Do you want to delete this?"
    );
    if (choose == "yes") {
      document.getElementById("name").value = "";
      document.getElementById("surname").value = "";
      document.getElementById("city").value = "";
    } else if (choose == "no") {
      alert("Done")
    }
  };