

// var cities = ["Karachi", "Lahore", "Multan", "Faisalabad"] 

// document.write(cities[2])


var vegetables = ["Peas", "Potato", "Cabbage", "Onion", "Capsicum", "Cauliflower", "Beetroot", "Spinach", "Tomato", "Radish", "Cucmber", "Batata", "Cassava", "Carrot", "Garlic",]

// vegetables[2]= "Cabbage-1"
// document.write(vegetables[2])


console.log(vegetables);
console.log(vegetables[8]);

var countries = ["Pakistan", "Afghanitan", "UAE", "UK", "Srilanka", "India", "Russia"]
countries.push("Palestine")
document.write(`Countries after Pushing--> ${countries} <br>`)
countries.push("Israel")
document.write(countries);
countries.pop();
document.write(`<br>Countries after poping--> ${countries}<br>`)
countries.unshift("SaudiArabia")
document.write(`Countires after unshifting--> ${countries}<br>`)
countries.unshift("Israel")
document.write(countries)
countries.shift();
document.write(`<br>Countries after shifting--> ${countries}<br>`)


var length = countries.length;
console.log(length);

// countries.length = 1;
// console.log(countries);

console.log(countries[countries.length - 1]);


console.log(countries[0]);

var fruits = ["Mango", "Apple", "Banana", "Orange", "Grapes"]
console.log(fruits);



// 3 parameters:index number (jahan se hamen add ya remove krna he),
//kitne items remove krne hen,
//jo items hamen add krne hen.


//only add
fruits.splice(0, 0, "Watermelon")
console.log(`Fruits After Splicing(adding)--> ${fruits}`);

//only remove
fruits.splice(0, 2)
console.log(`Fruits After Splicing(removing)--> ${fruits}`);

//add and remove
fruits.splice(3, 1, "Cranberry", "Dragonfruit", "Finger lime", "Grapefruit")
console.log(`Fruits After Splicing--> ${fruits}`);


var copy = fruits.slice(1,4);
console.log("Copy Using Slice-->", copy);

var copyAll = fruits.slice(1);
console.log(copyAll);




//  indexOf
var students = [213, 2142, 421, 2321, 21, 242, 54, 523, 123];
var userRollNumber = +prompt("Enter user roll number");

var userRollNumberInd = students.indexOf(userRollNumber);
console.log(userRollNumberInd);









