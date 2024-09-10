const clock = document.querySelector("h3#clock");
const date_show = document.querySelector("h3#date");

function getClock() {
    const date = new Date();
    // 연도, 월, 일
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    // 요일 반영해주기
    const dayIndex = date.getDay();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = dayNames[dayIndex];

    // 시, 분, 초
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    date_show.innerHTML = `🗓️${year}-${month}-${day} (${dayName})`;
    clock.innerHTML = `⏰ ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);