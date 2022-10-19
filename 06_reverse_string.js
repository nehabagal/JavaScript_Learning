// 10 to 0
var myName ="Neha";
var lenthStr = myName.length - 1; // 
var reverseStr = "";
for (let index = lenthStr; index >= 0; index--) {
    console.log(myName.charAt(index));
    reverseStr = reverseStr + myName.charAt(index)
}
console.log(reverseStr);

var add = 0;
for(var index=0; index<=5; index++){
    add = add + index;
}
console.log(add);
