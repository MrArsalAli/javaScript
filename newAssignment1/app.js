
var string = "ASASdhjbqwjbuqe!@312!@##$%^#$"
var password = "";
var password_h1 = document.getElementById("password")

function passwordGenerator(){
    password = "";
    for (let i = 0; i < 10; i++) {
        var randomNumber = Math.round( Math.random() * string.length);
        console.log("randomNumber-->", randomNumber, string.charAt(randomNumber) );
        password = password + string.charAt(randomNumber)
        console.log(password);
    }
    password_h1.innerText = password;
    
}

