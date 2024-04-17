// var arr = [1, 2, 3, 4, 5];
// arr.splice(1, 1);
// console.log("arr after splice " + arr );
// document.write(`arr after splice--> ${arr} <br>`);

// var fruits = ["apple", "banana", "orange", "kiwi", "grape"];
// fruits.splice(2, 2, "strawberry, pineapple")
// document.write(`fruits after splice-->${fruits} <br>`)

// var colors = ["red", "green", "blue", "yellow", "purple"];
// var copy = colors.slice(1, 3);
// document.write(`colors after slice-->${copy} <br>`)

// var numbers = [10, 20, 30, 40, 50];
// var copy1 = numbers.slice(2, 5)
// document.write(`numbers after slice-->${copy1} <br>`)

// var grades = [70, 80, 90, 99, 66]
// var lowestGrade = grades[0];
// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] < lowestGrade) {
//         lowestGrade = grades[i]
//     }
// }
// document.write(`The Lowest Grade is -->${lowestGrade}`);

// var numbers = [3, 6, 9, 12, 15];
// var totalSum =0;
// for (let i = 0; i < numbers.length; i++) {
//     totalSum += numbers[i]
// }
// document.write(`The totalSum is -->${totalSum}`);

// var prices = [25, 30, 15, 10, 50];
// var highestPrice = 0;
// for (let i = 0; i < prices.length; i++) {
//     if (prices[i] > highestPrice) {
//         highestPrice = prices[i]
//     }
// }
// document.write(`The Highest Price is ${highestPrice}`)

// var words = ["cat", "dog", "elephant", "giraffe", "lion"];
// var pluralWords = [];
// for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let pluralForm = word + "s";
//     pluralWords.push(pluralForm);
// }
// document.write(`Plural forms are -->${pluralWords}`)

// var fruits = ["apple", "banana", "cherry", "date", "fig"];
// var newFruits = fruits.slice(2, 4)
// document.write(`Fruits after slice are-->${newFruits}`)

// var numbers = [5, 10, 15, 20, 25];
// numbers.splice(2, 0, 12)
// document.write(`Numbers after splice are ${numbers}`)

// var numbers = [5, 10, 15, 20, 25];
// var userNum = +prompt(`Enter a Number you want to add`)
// numbers.splice(5, 0, userNum)
// document.write(`Numbers after adding User number are ${numbers}`)

var fruits = ["apple", "banana", "cherry", "date", "fig"];
var userFruit = +prompt(`Enter the index number of fruit u want to remove`)
fruits.splice(0, 0, userFruit)
document.write(`Fruits after removing user's-->${fruits}`)