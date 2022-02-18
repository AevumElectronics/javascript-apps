//const hourEl = document.getElementById("hour");
//const minuteEl = document.getElementById("minute");
//const secondsEl = document.getElementById("seconds");
const clockEl = document.getElementById("clockel");

// initial call
clock();

function clock() {
    const today = new Date();
    const ore=today.getUTCHours()
    const minuti=today.getUTCMinutes();
    const secondi=today.getUTCSeconds();
    //console.log(ore,minuti,secondi);

    const XhourEl = (formatTime(ore)+1)%24;
    const XminuteEl = formatTime(minuti);
    const XsecondsEl = formatTime(secondi);
    
    clockEl.innerHTML = "<h2>"+ XhourEl + ":" + XminuteEl +":" + XsecondsEl +"</h2>";
}
    




function formatTime(time) {
    return time < 10 ? `0${time}` : time;
    // if time < 10 then (?) ... string 0with{time} ($) ... else(:) just the time
    // Conditional (ternary) operator
}

setInterval(clock, 1000);
// the time is in milliseconds so the 1000 is for a 1s delay