alert("Welcome to hyeonseo info page!");
confirm("정말 현서의 자기소개 페이지에 접속하시겠습니까?");
prompt("접속자의 이름을 현서에게 알려주세요!", "");

const mainbox = document.getElementById("mainbox");
function maindarkmode() {
    mainbox.style.backgroundColor = '#262626';
    mainbox.style.color = 'white';
}
function mainlightmode() {
    mainbox.style.backgroundColor = 'white';
    mainbox.style.color = 'black';
    h2.style.backgroundColor = 'cornsilk'
}

const schebox = document.getElementById("schebox");
function schedarkmode() {
    schebox.style.backgroundColor = '#262626';
    schebox.style.color = 'white';
}
function schelightmode() {
    schebox.style.backgroundColor = 'white';
    schebox.style.color = 'black';
    h2.style.backgroundColor = 'cornsilk'
}