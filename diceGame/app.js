
var user_Number = document.getElementById("user_Number");
var random_Number = document.getElementById("random_Number");
var result = document.getElementById("result");
var win = document.getElementById("win");
var loss = document.getElementById("loss");
var total = document.getElementById("total");
var msg = document.getElementById("msg");  
var count = 10;
var wins = 0;
var losses = 0;


function diceGenerator(userNumber) {
    var randomNumber = Math.ceil(Math.random() * 6);
    user_Number.innerText = userNumber;
    random_Number.innerText = randomNumber;
    total.innerText = --count;
    if (userNumber == randomNumber) {
        result.innerText = "You Won";
        win.innerText = ++wins;
    } else {
        result.innerText = "You Loss"
        loss.innerText = ++losses;
    }

    CheckResult();
}


function CheckResult(){
    if (count == 0) {
        if (wins >= 3) {
            msg.innerText="You are lucky,You Won The Game"
        }else{
            msg.innerText="Sorry! You didn't Won"
        }
    }

}