const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // console.log(`${hours}:${minutes}:${seconds}`)
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
    // console.log("getClock() 호출")
}

getClock();
setInterval(getClock, 1000);

