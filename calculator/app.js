
var userInput = document.getElementById("user_input")
// var zero = document.getElementById("zero")
// var one = document.getElementById("one")
// var two = document.getElementById("two")
// var three = document.getElementById("three")
// var four = document.getElementById("four")
// var five = document.getElementById("five")
// var six = document.getElementById("six")
// var seven = document.getElementById("seven")
// var eight = document.getElementById("eight")
// var nine = document.getElementById("nine")
// var multiply = document.getElementById("multiply")
// var divide = document.getElementById("divide")
// var plus = document.getElementById("plus")
// var minus = document.getElementById("minus")
// var dot = document.getElementById("dot")

function zeros(value) { userInput.value += value; }
function ones(value) { userInput.value += value; }
function twos(value) { userInput.value += value; }
function threes(value) { userInput.value += value; }
function fours(value) { userInput.value += value; }
function fives(value) { userInput.value += value; }
function sixes(value) { userInput.value += value; }
function sevens(value) { userInput.value += value; }
function eights(value) { userInput.value += value; }
function nines(value) { userInput.value += value; }
function multiplies(value) { userInput.value += value; }
function divides(value) { userInput.value += value; }
function pluses(value) { userInput.value += value; }
function minuses(value) { userInput.value += value; }
function dots(value) { userInput.value += value; }


function calculates() {
    userInput.value = eval(userInput.value)
}

function clearDisplay(){
    userInput.value = "";
}