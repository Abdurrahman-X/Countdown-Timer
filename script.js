//SELECTORS
const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");
const newYear = "1 January 2021"
console.log(newYear);

function countdown() {
    const newYearDate = new Date(newYear);
    // Get current date
    const currentDate = new Date();
    //Calculate total seconds left before targeted date. 
    const totalSeconds = (newYearDate - currentDate) / 1000;
    //console.log(seconds);
    const days = Math.floor(totalSeconds / 86400);
    //console.log(days);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    //console.log(hours);
    const minutes = Math.floor(totalSeconds / 60) % 60;
    //console.log(minutes);
    const seconds = Math.floor(totalSeconds) % 60; 
    //console.log(seconds);
    

    Days.innerText = days;
    Hours.innerText = formatTime(hours);
    Minutes.innerText = formatTime(minutes);
    Seconds.innerText = formatTime(seconds);
}

// add 0 when the time is less than 10. (e.g 09)
function formatTime(time) {
    if (time < 10) {
        return `0${time}`;
    }else{
        return time;
    }
}

countdown();
setInterval(countdown, 1000);


