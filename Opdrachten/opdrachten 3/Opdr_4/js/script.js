let button = document.getElementById("reset");
button.addEventListener('click', reset);



function reset(){
    let valueForm = document.querySelectorAll('input');
    for (i = 0 ; i < valueForm.length; i++){
        valueForm[i].value = ' ';

    }
};