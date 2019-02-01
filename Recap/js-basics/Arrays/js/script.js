const readlineSync = require("readline-sync");


const arrSum = arr => arr.reduce((a,b) => a + b);

const arrAvg = arr => arr.reduce((a,b) => a + b)/arr.length;

let array = [5, 8, 17, 45]

console.log(arrSum(array))


/* const arr = [1,2,3,4,5];
console.log(arr)

// Spread Operator  
const arr1 = [...arr];
console.log(arr1)
let dubbleArray1 = arr.concat(arr1)
console.log(dubbleArray1)

// Slice Operator
const arr2 = arr.slice();
console.log(arr2)

// Concat
const arr3 = [].concat(arr)
console.log(arr3)

// Array.from()
const arr4 = Array.from(arr);
console.log(arr4)

// For loop
function arr5(arr) {
  let newArr = [];
  for(let i=0; i<arr.length; ++i) {
      newArr[i] = arr[i];
  }
  return arr;
 }

const arrMax = arr => Math.max(...arr);
const arrMin = arr => Math.min(...arr);


let array = [5, 8, 17, 45]

console.log(arrMin(array));

 */



