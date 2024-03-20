

// var num = +prompt(`Enter a number to check its even or odd`)

// if (num / 2 === 0) {
//     console.log(`The Number is even`);
// } else {
//     console.log(`The Number is odd`);
// }

// var num1 = +prompt(`Enter a number to check even its postitve or negative or zero`)

// if (num1 < 0) {
//     console.log(`The Number is Negative`);
// } else if (num1 === 0) {
//     console.log(`The Given Number is Zero`);
// } else{
//     console.log(`The Number is Positive`);
// }

// var num2 = +prompt(`Enter a Number to Show the Larger One`)
// var num3 = +prompt(`Enter a Number to Show the Larger One`)

// if (num2 > num3 ) {
//     console.log(`The Greater one is ${num2}`);
// } else{
//     console.log(`The Greater one is ${num3}`);
// }



// var num3 = +prompt(`Enter a number to know the Smaller One`)
// var num4 = +prompt(`Enter a number to know the Smaller One`)
// var num5 = +prompt(`Enter a number to know the Smaller One`)

// if (num3 < num4 && num3 < num5 ) {
//     console.log(`The Smallest is ${num3}`);
// } else if (num4 < num3 && num4 < num5 ) {
//     console.log(`The Smallest is ${num4}`);
// } else if (num5 < num3 && num5 < num4 ) {
//     console.log(`The Smallest is ${num5}`);
// } else if (num3 === num4 || num3 === num5 || num4 === num3 || num4 === num5 || num5 === num3 || num5 === num4) {
//     console.log(`All the numbers are Equal`);   
// }


// var num6 = +prompt(`Enter a Number to know its Factorial`)

// if (num6 === 0 || num6 === 1) {
//     console.log(`The Factorial of 0 and 1 is 1`);
// } else if (num6 < 0) {
//     console.log(`The Negative number does'nt have a factorial`);
// } else{
//     console.log(`${num6}`);
// }


var sub1 = +prompt(`Enter Number in First Subject`)
var sub2 = +prompt(`Enter Number in Second Subject`)
var sub3 = +prompt(`Enter Number in Third Subject`)
var totalMarks = 300;
var avrMarks = sub1 + sub2 + sub3 /3 

if (avrMarks > 90) {
    console.log(`Grade A+`);
}