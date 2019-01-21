function calc(){
    let age = document.getElementById("age").value;

    if (age >= 18) {
        message = "You are a grownup."
  }
    else if (age < 18){
    message = "You are lucky."
  }
    alert(message);

}
