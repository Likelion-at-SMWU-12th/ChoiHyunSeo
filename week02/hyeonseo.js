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
    var table = document.getElementById('schedule');
    var allCells = table.querySelectorAll('td, th'); // 테이블의 모든 셀(td)과 헤더(th)를 가져옵니다.
    for (var i = 0; i < allCells.length; i++) {
        allCells[i].style.borderColor = 'white'; // 각 셀과 헤더의 선 색을 하얀색으로 변경합니다.
    }
}

function schelightmode() {
    schebox.style.backgroundColor = 'white';
    schebox.style.color = 'black';
    var table = document.getElementById('schedule');
    var allCells = table.querySelectorAll('td, th'); // 테이블의 모든 셀(td)과 헤더(th)를 가져옵니다.
    for (var i = 0; i < allCells.length; i++) {
        allCells[i].style.borderColor = 'black'; // 각 셀과 헤더의 선 색을 하얀색으로 변경합니다.
    }
}
