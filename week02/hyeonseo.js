alert("Welcome to hyeonseo info page!");
confirm("Are you sure?");
prompt("What your name?", "");

const mainbox = document.getElementById("mainbox");
function darkmode() {
    mainbox.style.backgroundColor = '#262626';
    mainbox.style.color = 'white';
}
function lightmode() {
    mainbox.style.backgroundColor = 'white';
    mainbox.style.color = 'black';
    h2.style.backgroundColor = 'cornsilk'
}