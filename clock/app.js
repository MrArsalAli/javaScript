
var hours_HTML = document.getElementById("hours");
var minutes_HTML = document.getElementById("minutes");
var seconds_HTML = document.getElementById("seconds");
var amPm = document.getElementById("amPm");
var dates = document.getElementById("dates");
var btn = document.getElementById("btn");

setInterval(function () {
    var date = new Date();
    
    hours_HTML.innerText = date.getHours();
    minutes_HTML.innerText = date.getMinutes();
    seconds_HTML.innerText = date.getSeconds();
    dates.innerText = date.toLocaleDateString();
    if (hours_HTML >= 12) {
        amPm.innerText = "PM"
    }else{
        amPm.innerText = "AM"
    }
    
    // checkamPM();
}, 1000);


function formatChanger(){
    if (hours_HTML >= 12) {
        amPm.innerText= 12 - (date.getHours());
    }
}

// function checkamPM() {
//     if (hours_HTML >= 12) {
//         amPm.innerText = "AM";
//     } else {
//         amPm.innerText = "PM";
//     }
//     if (hours_HTML < 10) {
//         hours_HTML.innerText = "0" + date.getHours();
//     }
//     if (minutes_HTML < 10) {
//         minutes_HTML.innerText = "0" + date.getMinutes();
//     }
//     if (seconds_HTML < 10) {
//         seconds_HTML.innerText = "0" + date.getSeconds();
//     }
// }





// setInterval( function(){
//     var date = new Date();
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var seconds = date.getSeconds();
//     if (hours < 10) {hours = "0" + hours}
//     if (minutes < 10) {hours = "0" + minutes}
//     if (seconds < 10) {hours = "0" + seconds}
    
    
//     hours_HTML.innerText = hours;
//     minutes_HTML.innerText = minutes;
//     seconds_HTML.innerText = seconds;

// }, 1000);