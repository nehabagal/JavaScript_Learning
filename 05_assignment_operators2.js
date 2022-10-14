console.log("==============1. Finding greatest number==============");
var greatestNumber = function(num1, num2){
var result = num1>num2 ? num1 : num2;
console.log(`The greater number between ${num1} and ${num2} is ${result}`);
}
greatestNumber(10, -10);
greatestNumber(800, 899);

console.log("==============2. Finding even or odd number==============");
var evenOdd = function(num){
var result = num%2==0 ? true : false;
return result;
}
console.log(`The number 29 is even number: ${evenOdd(29)}`);
console.log(`The number 44 is even number: ${evenOdd(44)}`);
console.log(`The number 0 is even number: ${evenOdd(0)}`);
console.log(`The number 101 is even number: ${evenOdd(101)}`); 

console.log("==============3. Finding even or odd length of given string==============");
var evenOddLength = function(str){
var strLength = str.length;
var result = strLength%2==0 ? true : false;
return result;
}
console.log(`The word JavaScript has even length: ${evenOddLength("JavaScript")}`);
console.log(`The word Developer has even length: ${evenOddLength("Developer")}`);
console.log(`The word Google has even length: ${evenOddLength("Google")}`);