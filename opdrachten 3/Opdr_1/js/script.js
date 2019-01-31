let image = document.getElementById('image1');
image.addEventListener('mouseover', imgChange);
image.addEventListener('mouseout', imgChange2);




function imgChange (){
    document.getElementById("image1").src = "images/image1_2.jpg";
};

function imgChange2 (){
    document.getElementById("image1").src = "images/image1.jpg";
};


