// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// function loginSubmit(event) {
//     event.preventDefault();
//     loginForm.classList.add("hidden");
//     const userName = loginInput.value;
//     greeting.innerText = `Hello ${userName} !`;
//     greeting.classList.remove("hidden");
// }

// loginForm.addEventListener("submit", loginSubmit);


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden"); //요소에 "hidden"이라는 이름의 class를 추가해주기
    const userName = loginInput.value;
    greeting.innerText = `Hello ${userName} !`;
    greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", loginSubmit); //"submit" 이벤트 만들어주기