const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
//document.getelementbyid("X") returns an element with a specific ID
const newYears = "1 Jan 2023"; //new year's eve date

function countdown() {
    //Date() objects contain a Number that represents milliseconds since 1 January 1970 UTC
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    //seconds between our new year date and the current date
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    //Math.floor() function returns the largest integer less than or equal to a given number
    //The remainder operator (%) returns the remainder left over (resto)
    const seconds = Math.floor(totalSeconds) % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);

    //Setting the value of innerHTML lets you easily replace the existing contents of an element with new content.
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
    // if time < 10 then (?) ... string 0with{time} ($) ... else(:) just the time
    // Conditional (ternary) operator
}

// initial call
countdown();

setInterval(countdown, 1000);
// the time is in milliseconds so the 1000 is for a 1s delay