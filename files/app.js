 // 1 OEFENING:
console.log(document.body)


let body = document.getElementsByTagName('body');
console.log(body);
body[0].classList.remove('bg-aqua');

body[0].className = "bg-olive"

let par = document.getElementsByTagName('p');
console.log(par);
par[0].classList.remove('bg-lime');
par[0].classList.remove('gray');
par[0].className = ("aqua");
console.log(par);

let bgSilver = document.getElementsByClassName('bg-silver');
console.log(bgSilver);
for (i=0; i < bgSilver.length; i++){
    bgSilver[i].classList.add("bg-teal");
    bgSilver[i].classList.remove("bg-silver");
};

let block = document.getElementsByTagName('blockquote');
for (i=0; i < block.length; i++){
    block[i].classList.add('bg-white');
};

 //Oefening 2

let myTable = document.querySelector('#my-table');
myTable.classList.add('bg-purple');

let contPar = document.querySelectorAll('.container p');
for (i=0; i < contPar.length; i++){
    contPar[i].classList.add('shadow');
}

let pre = document.getElementsByTagName('pre');
for (i=0; i < pre.length; i++){
    pre[i].style.color = 'blue';
    pre[i].style.backgroundColor = 'green';
    pre[i].style.border = '3px solid darkgreen';
}


let h3 = document.getElementsByTagName('h3');
h3[0].innerHTML = '<em> Italic title! yeah! </em>';

 let h2 = document.getElementsByTagName('h2');
h2[0].innerHTML = "<strong> HTML doesn't work! </strong>"; 

//OEFENING 04

let ul = document.getElementsByTagName('ul');
let newLi = document.createElement('li');
newLi.innerHTML = "<a href='http://www.google.com'>Google</a>"
ul[0].appendChild(newLi);
let link = document.querySelectorAll("li a")[0];
link.style.color = "red";


//Oefening 5

/* let firstOl = document.querySelector('ol');
console.log(firstOl);
let children = firstOl.children;
console.log(children);

while (firstOl.hasChildNodes){
    firstOl.removeChild(firstOl.children)
}
 */



