let target = document.querySelector("#dynamic"); // ID가 "dynamic"인 요소 선택

function randomString() {
    let stringArr = ["현서의 페이지에 오신 것을 환영합니다", "발등에 운석 우두두 떨어지는 중", "주은짱 타이핑 기능 너무 멋잇어여 //"]; // 문자열 배열
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]; // 배열에서 무작위로 하나의 문자열 선택
    let selectStringArr = selectString.split(""); // 선택된 문자열을 문자 배열로 분할

    return selectStringArr;
}

function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

function dynamic(randomArr) {
    if(randomArr.length > 0) {
        // shift 메서드를 이용하여 split된 배열의 앞의 것부터 빼내어 출력
        target.textContent += randomArr.shift();
        setTimeout(function() {
            dynamic(randomArr);
        }, 100);
    } else {
        setTimeout(resetTyping, 3000);
    }
}


// dynamic(selectStringArr); // 선택된 문자열 배열을 인자로 받아 dynamic 함수 호출
dynamic(randomString()); // 선택된 문자열 배열을 인자로 받아 dynamic 함수 호출

// console.log(selectString); // 선택된 문자열 출력
// console.log(selectStringArr); // 선택된 문자열이 분할된 배열 출력

function blink() {
    target.classList.toggle("active"); // target 요소의 클래스 "active"를 토글
}

setInterval(blink, 500); // 0.5초마다 blink 함수 호출
