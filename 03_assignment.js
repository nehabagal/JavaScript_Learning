var sq = function(arg1){
console.log(arg1 * arg1);
}
console.log("Square of Numbers");
sq(5);
sq(6);
sq(25);
sq(100);
console.log("-------------------------------");

console.log("Type of function");
var char = typeof(sq);
console.log(char);
console.log("-------------------------------");

console.log("Area of Triangle");
var areaofTriangle = function(base, height){
console.log(1/2 * base * height);
}
areaofTriangle(45, 34);
console.log("-------------------------------");

console.log("Area of Rectangle");
var areaofRectangle = function(length, width) {
    console.log(length * width);
}
areaofRectangle(499, 917);
console.log("-------------------------------");

console.log("Swapping Values");
var temp;
var swap = function(arg1, arg2){
    console.log("Values before Swap");
    console.log(arg1, arg2);
    temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log("Values after Swap");
    console.log(arg1, arg2);
}
swap(1000, 2000);
swap("Virat" , "Anushka");

console.log("-------------------------------");
var strOperations = function(arg1){
var length = arg1.length;
console.log(`Total characters available in the string: ${length}`);
var index = arg1.indexOf('S');
console.log(`Index of character 'S': ${index}`);
var indexstr = arg1.indexOf('lang');
console.log(`Index of string 'lang': ${indexstr}`);
var lastChar = arg1.charAt(length-1);
console.log(`Last character in string: ${lastChar}`);
var thirdChar = arg1.charAt(length-3);
console.log(`Last character in string: ${thirdChar}`);
}
strOperations("JavaScript the most popular language");