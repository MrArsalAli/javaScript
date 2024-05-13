
var input_html = document.getElementById('user_input');
var msg_html = document.getElementById('message');



function numberChecker(){
    var num = user_input.value;
    if (num > 0 ) {
        evenOdd()
    } else{
        msg_html.innerText = "Please Put A Number"
    }
}

function evenOdd(){
    if (user_input.value % 2 == 0) {
        msg_html.innerText = user_input.value + " is an Even Number";
        msg_html.style.color = "Orange";
        user_input.value = "";
    }else{
        msg_html.innerText = user_input.value + " is a Odd Number";
        msg_html.style.color = "Yellow";
        user_input.value = "";
    }
}