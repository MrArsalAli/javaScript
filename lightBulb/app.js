
// EventListeners

var bg_html = document.getElementById("bg");
var On = document.getElementById("turnOn");
var Off = document.getElementById("turnOff");

On.addEventListener("click", function () {
    bg_html.style.height = "100vh";
    bg_html.style.width = "100vw";
    bg_html.style.backgroundImage = "url('https://images.pexels.com/photos/1252807/pexels-photo-1252807.jpeg?auto=compress&cs=tinysrgb&w=600')";
    bg_html.style.backgroundSize = "cover";
    bg_html.style.backgroundPosition = "center";
    bg_html.style.backgroundRepeat = "no-repeat";

});

Off.addEventListener("click", function () {
    bg_html.style.backgroundImage = "url('https://images.pexels.com/photos/220096/pexels-photo-220096.jpeg?auto=compress&cs=tinysrgb&w=600')";
});





