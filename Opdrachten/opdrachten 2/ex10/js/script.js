const mySum = () => {
    let a = parseInt(prompt("give me a number"));
    let b = parseInt(prompt("give me another one"));
    let c = parseInt(prompt("one more, I promise it's the last"));

    document.getElementById("sum").innerHTML = "The sum is " + (a + b + c);

}