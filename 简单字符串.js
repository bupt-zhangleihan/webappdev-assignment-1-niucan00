var string1 = "Hello, ";
var string2 = "World!";

var combinedString = string1 + string2;
console.log("拼接后的字符串：" + combinedString);

var substring = combinedString.slice(0, 5);
console.log("截取的子字符串：" + substring);

var replacedString = combinedString.replace("World", "Universe");
console.log("替换后的字符串：" + replacedString);

var upperCaseString = combinedString.toUpperCase();
console.log("大写字符串：" + upperCaseString);

var lowerCaseString = combinedString.toLowerCase();
console.log("小写字符串：" + lowerCaseString);