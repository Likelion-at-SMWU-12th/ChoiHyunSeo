// querySelector를 이용해서 원하는 요소 데려오기
const content = document.querySelector("div.content h1");

// 클릭했을 때 작동할 함수 만들어주기
function handleContentClick() {
    content.style.color = "orange";
}

// content를 클릭했을 때의 이벤트를 listen 후, 함수 실행
content.addEventListener("click", handleContentClick);