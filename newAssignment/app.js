
var str = "string";
var lngth = str.length;
console.log(lngth);

var strUp = str.toUpperCase();
console.log(strUp);

var strLw = str.toLowerCase();
console.log(strLw);

console.log(str.charAt(3));

var spcStr = "Lorem Ipsum is simply dummy text of the printing & typesetting industry! @Lorem Ipsum has been the industry's#standard dummy text ever since the 1500s,"
for (var i = 0; i < spcStr.length; i++) {
    if (spcStr.charAt(i) === "!" || spcStr.charAt(i) === "@" || spcStr.charAt(i) === "&" || spcStr.charAt(i) === "#") {
        console.log(i, "Special Character Found!");
    }
}

// var strng = "Marvellous";
// var stEndInd = +prompt(`Enter the index number from which u want to extract`)
// var copy = strng.slice(stEndInd);
// console.log(copy);

// var strn = prompt(`Enter a string`);
// var capt = strn[0].toUpperCase() + strn.slice(1);
// console.log(capt);

var userName = "arsalanAli      "
console.log(`userName After Trimming-->`, userName.trim());

var lorem = "Loremmm";
lorem = lorem.replace("mmm", "m3");
console.log(lorem);

var ipsum = "ipsummm";
ipsum = ipsum.replace("mmm", "m3");
console.log(ipsum);


var sentence = "Count the number of vowels and consonants in a given string"
var vowelCount = 0;
var constCount = 0;

// for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i].toLowerCase() === "a" || sentence[i].toLowerCase() === "e" || sentence[i].toLowerCase() === "i" || sentence[i].toLowerCase() === "o" || sentence[i].toLowerCase() === "u") {
//         vowelCount++;
//     }
//     else if (sentence[i] !== " ") {
//         constCount++;
//     }

// }

// console.log(`The Number of Vowels are ${vowelCount} & Consonant are ${constCount} `);

var vowels = ["a", "e", "i", "o", "u"]

for (let i = 0; i < sentence.length; i++) {
    var vowelsFound = false;
    for (let j = 0; j < vowels.length; j++) {
        if (sentence[i].toLowerCase() === vowels[j]) {
            vowelsFound = true;
            break;
        }
    }
    if (vowelsFound) vowelCount++;
    if(!vowelsFound && sentence[i] !== " ") constCount++;
}
console.log(`The Number of Vowels are ${vowelCount} & Consonant are ${constCount} `);


var sentence1 = "Count the number of words in a given string.";
var split = sentence1.split(" ");
console.log(split);
console.log(`The Number of words in the string is ${split.length}`);
