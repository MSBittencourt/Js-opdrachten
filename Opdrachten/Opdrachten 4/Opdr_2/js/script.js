let hide = document.getElementById('hide').addEventListener('click', Hide);
let show = document.getElementById('show').addEventListener('click', Show);


function Hide() {
    document.getElementById('text').style.display = 'none';
}

function Show() {
    document.getElementById('text').style.display = 'block';
}
