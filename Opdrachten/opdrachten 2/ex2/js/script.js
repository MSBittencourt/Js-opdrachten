const circleArea = () => {
    let radius = document.getElementById("radius").value;
    
    document.getElementById("area").innerHTML =("The area of the circle is " + Math.PI*Math.pow(radius,2));

}