
var dice = document.getElementById("dice");
var win_loss = document.getElementById("win_loss");
var input_dice = document.getElementById("input_dice");
var wins = 0;
var losses = 0;
var attempts = 0;

// function diceNumberGenerator(){
//     var userValue = input_dice.value;
//     if (userValue < 7) {
//         var diceNumber = Math.ceil(Math.random()*6);
//         dice.innerText = diceNumber;
//         if (userValue == diceNumber ) {
//             win_loss.innerText = "You Win";
//             win_loss.style.color = "Green";
//         }else{
//             win_loss.innerText = "You Loss,Try Again Later";
//             win_loss.style.color = "Red";
//         }
//     }else{
//         win_loss.innerText = "Dice me 6 se zyada ni hote";
//         win_loss.style.color = "purple";
//     }
// }


function diceNumberGenerator() {
    var userValue = input_dice.value;
    if (userValue < 7) {
        var diceNumber = Math.ceil(Math.random() * 6);
        dice.innerText = diceNumber;
        for (let i = 0; i < 10; i++) {

            if (userValue == diceNumber) {
                wins++;
            } else {
                losses++;
            }
            attempts++;
        }
        if (wins >= 3) {
            win_loss.innerText = "You Won the Game"
        }else{
            win_loss.innerText = "Sorry,Try Again"
        }
    } else {
        win_loss.innerText = "Dice me 6 se zyada ni hote";
        win_loss.style.color = "purple";
    }
}


