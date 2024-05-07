
var number = document.getElementById("no");
var user_input = document.getElementById("user_input");
var startBtn = document.getElementById("start");
var result = document.getElementById("result");
var message = document.getElementById("msg");
var runningNumber = 0;
var watchInterval;

function start() {
    if (user_input.value) {
        watchInterval = setInterval(function () {
            if (runningNumber >= 1000) {
                clearInterval(watchInterval);
                runningNumber = 0;
                number.innerText = runningNumber;
                result.innerText = "We Had Told to put before 100!"
                start.disabled = true;
            } else {
                runningNumber++;
                number.innerText = runningNumber;
            }
        }, 10)
        start.disabled = true;
    } else {
        message.innerText = "Number Daal De Be "
    }
}


function stop() {
    clearInterval(watchInterval);
    if (user_input.value === runningNumber) {
        result.innerText = "Won"
    } else {
        result.innerText = "Loss"
    }
    runningNumber = 0;
    number.innerText = 0;
    start.disabled = false;
}
