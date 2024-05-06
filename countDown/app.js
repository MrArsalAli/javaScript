


var year = document.getElementById("year")
var month = document.getElementById("month")
var day = document.getElementById("day")
var hour = document.getElementById("hour")
var minute = document.getElementById("minute")
var second = document.getElementById("second")
var mSecond = document.getElementById("mSecond")


setInterval(function () {
    var now = new Date();
    var eidDate = new Date("6/16/2024")
    var timeNow = now.getTime();
    var timeEid = eidDate.getTime();
    var diff = timeEid - timeNow;

    year.innerText = Math.floor(diff / 1000 / 60 / 60 / 24 / 30 / 12);
    month.innerText = Math.floor(diff / 1000 / 60 / 60 / 24 / 30);
    day.innerText = Math.floor(diff / 1000 / 60 / 60 / 24);
    hour.innerText = Math.floor(diff / 1000 / 60 / 60);
    minute.innerText = Math.floor(diff / 1000 / 60);
    second.innerText = Math.floor(diff / 1000);
    mSecond.innerText = Math.floor(diff);










}, 1000)

