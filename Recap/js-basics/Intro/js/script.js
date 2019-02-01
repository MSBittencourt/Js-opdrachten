const readlineSync = require("readline-sync");

/* let userName = readlineSync.question('Can you give me your name please?');
console.log("Hello " + userName); */



let name = "Bittencourt";
let firstName = 'Marianna';
let city = "Antwerpen"

console.log(`Your name is ${firstName} ${name} and you live in ${city}`);

let x = readlineSync.question(`Whats is your first name?`)
console.log(`Hello ${x}`);
 
let name = readlineSync.question(`What's your name?`);
let firstName = readlineSync.question(`What's your first name?`);
let city = readlineSync.question(`Where are you from?`);

console.log(`Your name is ${firstName} ${name} and you live in ${city}`);

let x = prompt(`Gimme a broken number`);
let y = prompt(`Another broken one, please`);

console.log(parseInt(x))