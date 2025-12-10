let timerdisplay = document.querySelector(".timerdisplay");
let stpBtn = document.getElementById("stpBtn");
let strtBtn = document.getElementById("strtBtn");
let rstBtn = document.getElementById("rstBtn");

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

strtBtn.addEventListener('click',function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});
stpBtn.addEventListener('click',function(){
        clearInterval(timerId);
});

rstBtn.addEventListener('click',function(){
        clearInterval(timerId);
        timerdisplay.innerHTML = "00 : 00 : 00";
        msec = secs = mins = 0;
});

function startTimer() {
    msec++;
    if(msec === 100) {
        msec = 0;
        secs++;
        if(secs === 60) {
            secs = 0;
            mins++;
        }
    }
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minString = mins < 10 ? `0${mins}` : mins;

    timerdisplay.innerHTML = `${minString} : ${secsString} : ${msecString}`;
}
