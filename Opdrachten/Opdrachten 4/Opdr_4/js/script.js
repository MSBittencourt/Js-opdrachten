let buttom = document.getElementById('button').addEventListener('click', passConfimation);
let password = document.getElementById('password');
let confirmation = document.getElementById('confirmation');

function passConfimation(){

    if (confirmation.value === password.value){
        confirmation.style.backgroundColor = "green";
        password.style.backgroundColor = "green";        
    }
    else {
        confirmation.style.backgroundColor = 'red';
        password.style.backgroundColor = 'red';
    }

}
