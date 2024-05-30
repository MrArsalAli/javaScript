

var income_output = document.getElementById("income_output");
var expenses_output = document.getElementById("expenses_output");
var savings_html = document.getElementById("savings");
var incomes = document.getElementById("income");
var expenses = document.getElementById("expenses");

var savings = 0;


function addIncome() {
    var amount = incomes.value;
    income_output.innerText = amount;
}


function addExpense() {
    var amount1 = expenses.value;
    expenses_output.innerText = amount1;
}

function calculateSavings() {
    var savings = income_output.innerText - expenses_output.innerText;
    savings_html.innerText = savings;
}

function clearEverything() {
    income_output.innerText = "00";
    expenses_output.innerText = "00";
    savings_html.innerText = "00";
}