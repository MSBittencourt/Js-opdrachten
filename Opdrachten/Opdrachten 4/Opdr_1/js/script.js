let image = document.querySelector('#image1');
image.addEventListener('mouseover', styleAdd)
image.addEventListener('mouseout', styleRemove)

function styleAdd(){
    image.style.border = "3px solid red";
    
}

function styleRemove(){
    image.style.border = "";
    
}