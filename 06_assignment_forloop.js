console.log("=====print numbers from 5 to 15 by using for loop====");
for(var index=5; index<=15; index++){
    console.log(index);
}

console.log("=====print numbers from 50 to 40 by using for loop====");
for(var index=50; index>=40; index--){
    console.log(index);
}

console.log("=====print first 15 odd numbers by using for loop====");
var countOdd = 0;
for(index=0; index<=1000; index++){
    if (index%2!=0) {
        console.log(index);
        countOdd = countOdd + 1;
        if (countOdd==15) {
            break;
        }
    }        
}

console.log("=====print first 10 even numbers by using for loop====");
var countEven = 0;
for(var index = 0; index<=1000; index++){
    if (index%2==0) {
        console.log(index);
        countEven = countEven + 1;
        if (countEven==10) {
            break;
        }
        
    }
}

console.log("=====Table of 5====");
var count = 0;
for(var index = 1; index<=1000; index++){
    var result = index * 5;
    console.log(result);
    count = count + 1;
    if (count == 10) {
        break;
    }
}

console.log("=====Table of 10====");
for(var index = 1; index <= 10; index++){
console.log(index * 10);   
}

console.log("=====Table of 10 in reverse order====");
for(var index = 100; index>=1; index = index-10){
    console.log(index * 1);

}
    