const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // console.log(`${hours}:${minutes}:${seconds}`)
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
    // console.log("getClock() 호출")
}

getClock();
setInterval(getClock, 1000);