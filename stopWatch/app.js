
var min_html = document.getElementById("min");
var sec_html = document.getElementById("sec");
var mSec_html = document.getElementById("mSec");
var btn = document.getElementById("start")

var minutes = 0;
var seconds = 0;
var mSeconds = 0;

var watchInterval;

function start() {
    watchInterval = setInterval(function () {
        mSeconds++;
        if (mSeconds >= 99) {
            seconds++;
            mSeconds = 00;
        }
        if (seconds >= 59) {
            minutes++;
            seconds = 00;
        }
        mSec_html.innerText = mSeconds;
        sec_html.innerText = seconds < 10 ? "0" + seconds : seconds;
        min_html.innerText = minutes < 10 ? "0" + minutes : minutes;
        btn.disabled = true;
    }, 10)
};
function stop() {
    clearInterval(watchInterval);
    btn.disabled = false;
};
function reset() {
    clearInterval(watchInterval);
    btn.disabled = false;
    minutes = 0;
    seconds = 0;
    mSeconds = 0;
    min_html.innerText = 0;
    sec_html.innerText = 0;
    mSec_html.innerText = 0;
};