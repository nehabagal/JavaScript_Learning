//WAP to count total number of vowels using includes() for given string
var givenString = "I am very good IT Developer";
var vowelsLowercase = "aeiou";
var vowelsUppercase = "AEIOU";
var count = 0;
var length = givenString.length;
for(let index=0; index<=length-1; index++){
    var char = givenString.charAt(index);
    if (vowelsLowercase.includes(char) || vowelsUppercase.includes(char)) {
       console.log(char);
       count = count + 1;
    }
}
console.log(`Total number of vowels available in given string: ${count}`);

console.log("============================================================================");
//WAP to get the sum of cube of numbers from 1 to 5
var result = 0;
for (let index = 1; index <= 5; index++){
var cube = index * index * index;
result = result + cube;    //1 8 27 64 125
}
//console.log(`Sum of cubes of numbers from 1 to 5: ${result}`);

console.log("============================================================================");
var givenStr = "Hard work always pays back";
//oddPositionedChars(str){
for(let index=0; index<=givenStr.length; index++)
{
    var char = givenStr.charAt(index);
    if(index%2!=0 && char!= " ") {
//        console.log(char);
    }
}
//}
//oddPositionedChars("Hard work always pays back");