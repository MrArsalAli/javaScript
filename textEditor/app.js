
var bolder_html = document.getElementById('bolder');
var itallic_html = document.getElementById('itallic');
var underline_html = document.getElementById('underline');
var fontSize_html = document.getElementById('fontSize');
var fontFamily_html = document.getElementById('fontFamily');
var textColor_html = document.getElementById('textColor');
var textTransform_html = document.getElementById('textTransform');
var textTransform1_html = document.getElementById('textTransform1');
var userInput_html = document.getElementById('userInput');

bolder_html.addEventListener("click", function () {
    userInput_html.style.fontWeight = "900";
})

itallic_html.addEventListener("click", function () {
    userInput_html.style.fontStyle = "italic";
})

underline_html.addEventListener("click", function () {
    userInput_html.style.textDecoration = "underline";
})

fontSize_html.addEventListener("click", function () {
    userInput_html.style.fontSize = "x-large";
})

fontFamily_html.addEventListener("click", function () {
    userInput_html.style.fontFamily = "Impact";
})

textColor_html.addEventListener("click", function () {
    userInput_html.style.color = "red";
})

textTransform_html.addEventListener("click", function () {
    userInput_html.style.textTransform = "uppercase";
})

textTransform1_html.addEventListener("click", function () {
    userInput_html.style.textTransform = "lowercase";
})


