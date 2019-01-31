function surfaceRectangle() {
    let w = document.getElementById("width").value;
    let l = document.getElementById("length").value;

    let area = w*l;

    document.write(`The area is: ${area}`);
    
}; 

function perimeterRectangle() {
    let w1 = document.getElementById("width").value;
    let l1 = document.getElementById("length").value;

    let w2 = parseInt(w1, 10);
    let l2 = parseInt(l1, 10);
    let circumference = 2*(w2+l2);


    document.write(`The circumference is: ${circumference}`); 
}