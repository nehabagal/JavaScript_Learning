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
var swap = swap_values(arg1, arg2){
    console.log("Values before Swap");
    console.log(arg1, arg2);
    temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log("Values after Swap");
    console.log(arg1, arg2);
}
swap(1000, 2000);

console.log("-------------------------------");
var abc = "JavaScript the most popular language";
function(abc){
var length = abc.length();
console.log(length);
}
