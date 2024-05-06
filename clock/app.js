
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

    if (date.getHours() >= 12) {
        amPm.innerText = "PM";
    } else {
        amPm.innerText = "AM";
    }
    if (date.getHours() < 10) {
        hours_HTML.innerText = "0" + date.getHours();
    }
    if (date.getMinutes() < 10) {
        minutes_HTML.innerText = "0" + date.getMinutes();
    }
    if (date.getSeconds() < 10) {
        seconds_HTML.innerText = "0" + date.getSeconds();
    }

    if (date.getHours() > 12) {
        hours_HTML.innerText = (date.getHours() - 12);
    } else {
        hours_HTML.innerText = date.getHours();
    }


}, 1000);


function themeChanger() {
    hours_HTML.style.backgroundColor = "white";
    minutes_HTML.style.backgroundColor = "white";
    seconds_HTML.style.backgroundColor = "white";
    amPm.style.backgroundColor = "white";
    dates.style.backgroundColor = "white";
    btn.style.backgroundColor = "white";
    hours_HTML.style.color = "black";
    minutes_HTML.style.color = "black";
    seconds_HTML.style.color = "black";
    amPm.style.color = "black";
    dates.style.color = "black";
    btn.style.color = "black";
}




