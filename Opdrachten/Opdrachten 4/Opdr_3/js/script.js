let divs = document.getElementsByClassName('color');
divs[0].addEventListener('click', ChangeText);
divs[1].addEventListener('click', ChangeText);
divs[2].addEventListener('click', ChangeText);

function ChangeText(event){
    document.getElementById('text').style.color = event.target.classList[1] 
    /* if (divs[0].clicked === true){
        document.getElementById('text').style.color = "green"
    }
    else if (divs[1].clicked === true){
        document.getElementById('text').style.color = "red"
    }
    else if (divs[2].clicked === true){
        document.getElementById('text').style.color = "blue"
    }
    else{
        document.getElementById('text').style.color = ""
    } */

   console.log(event.target.classList[1]);
}