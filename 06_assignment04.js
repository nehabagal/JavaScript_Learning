var givenStr = "Hard work always pays back";
var length = givenStr.length;
var reverseStr = "";
for(let index=length; index>=0; index--){
    var char = givenStr.charAt(index);
if (char != " ") {
    var reverseStr = reverseStr + char;    
}
}
console.log(reverseStr);