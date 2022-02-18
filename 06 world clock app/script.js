const romeEl = document.getElementById("rome");
const singaporeEl = document.getElementById("singapore");
const newyorkEl = document.getElementById("newyork");
const losangelesEl = document.getElementById("losangeles");

// initial call
clock();

function clock() {
    const today = new Date();
    const ore=today.getUTCHours()
    const minuti=today.getUTCMinutes();
    const secondi=today.getUTCSeconds();
    //console.log(ore,minuti,secondi);

    const XhourEl = formatTime(ore);
    const XminuteEl = formatTime(minuti);
    const XsecondsEl = formatTime(secondi);

    losangelesEl.innerHTML = "<h2>"+ (formatTime(ore)+16)%24 + ":" + XminuteEl +":" + XsecondsEl +"</h2>";
    newyorkEl.innerHTML = "<h2>"+ (formatTime(ore)+19)%24 + ":" + XminuteEl +":" + XsecondsEl +"</h2>";
    romeEl.innerHTML = "<h2>"+ (formatTime(ore)+1)%24 + ":" + XminuteEl +":" + XsecondsEl +"</h2>";
    singaporeEl.innerHTML = "<h2>"+ (formatTime(ore)+8)%24 + ":" + XminuteEl +":" + XsecondsEl +"</h2>";
}
    




function formatTime(time) {
    return time < 10 ? `0${time}` : time;
    // if time < 10 then (?) ... string 0with{time} ($) ... else(:) just the time
    // Conditional (ternary) operator
}

setInterval(clock, 1000);
// the time is in milliseconds so the 1000 is for a 1s delay