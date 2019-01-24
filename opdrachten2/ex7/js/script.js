makeChoice = () => {

let choices = prompt("Make a choice");

  switch(choices) {
    case "1":
    alert("1. Thank you");
    break;
    case "2":
    alert('2. Hello');
    break;
    case "3":
    alert("3. Good bye");
    break;
    default:
    alert('Excuse me, what do you want?');
  }
}