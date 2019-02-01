const readlineSync = require("readline-sync");



const calcSurface = (length, width) => length*width;

let x = readlineSync.question(`Gimme me the length of a rectangle: `);
let y = readlineSync.question(`Gimme me the width of a rectangle: `);

console.log(calcSurface(x,y));

const rand10 = () => Math.floor((Math.random() * 10) + 1);

console.log(rand10())