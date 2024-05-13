
var output_html = document.getElementById('screen');
var msg_html = document.getElementById('message');



function count() {
    var num = parseInt(document.getElementById("screen").innerText);
    var num1 = num + 1;
    output_html.innerText = num1;
    evenOddCheck();
}

function reset(){
    output_html.innerText = "0";
}

function evenOddCheck(){
    if (output_html.innerText % 2 == 0) {
        msg_html.innerText = "Even";
    }else{
        msg_html.innerText = "Odd";
    }
}