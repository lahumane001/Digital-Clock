var cl = console.log;

function createDigitalClock() {
    const digitalClock = document.getElementById("digitalClock");

    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let session = "AM"
    if (hr >= 12) {
        hr = hr - 12;
        session = "PM";
    }

    let result = `${setZero(hr)} : ${setZero(min)} : ${setZero(sec)} ${session}`;

    digitalClock.innerHTML = result;

    setTimeout(createDigitalClock, 1000);
}
createDigitalClock();

function setZero(num) {
    return (num < 10) ? "0" + num : num;
}

