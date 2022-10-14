var wordLengthSquare = function(word){
var wlength = word.length;
console.log(`Length of the ${word} is ${wlength}`);
var square = wlength * wlength;
return square;
}
console.log("=======================1=======================");
console.log(`Square of the length of the word JavaScript is ${(wordLengthSquare("JavaScript"))}`);
console.log(`Square of the length of the word Google is ${(wordLengthSquare("Google"))}`);
console.log(`Square of the length of the word Developer is ${(wordLengthSquare("Developer"))}`);

console.log("=======================2=======================");
var givenString = "I Am Angular Developer";
var stras = function(){
var totalLength = givenString.length;
console.log(`Length of the given string is ${totalLength}`);
var splittedStr = givenString.split(" ");
var totalWords = splittedStr.length;
var result = totalLength / totalWords;
console.log(`Total number of words in the given string are ${totalWords}`);
console.log(`Result of dividing string length by total number of words is ${result}`);
}
stras();