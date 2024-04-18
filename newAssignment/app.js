
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
console.log(`useName After Trimming-->`, userName.trim());

var lorem = "Loremmm";
lorem = lorem.replace("mmm", "m3");
console.log(lorem);

var ipsum = "ipsummm";
ipsum = ipsum.replace("mmm", "m3");
console.log(ipsum);
