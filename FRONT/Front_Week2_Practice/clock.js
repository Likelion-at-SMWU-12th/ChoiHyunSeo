const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`)
    clock.innerHTML = "지금 시간은 00:00";
    // console.log("getClock() 호출")
}

getClock();
setInterval(getClock, 1000);

