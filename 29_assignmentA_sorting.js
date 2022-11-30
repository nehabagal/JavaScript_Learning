const array_roll_numbers= [113, 45, 56,11,32,45,109,799,56,45];
console.log("====================Reverse Array=====================");
array_roll_numbers.reverse();
console.log(array_roll_numbers);
console.log("====================Sort Array in Ascending Order=====================");
array_roll_numbers.sort((a,b)=>{
return a>b ? 1 : -1;
});
console.log(array_roll_numbers);
console.log("====================Sort Array in Descending Order=====================");
array_roll_numbers.sort((a,b)=>{
return a>b ? -1 : 1;
});
console.log(array_roll_numbers);
console.log("====================Sort Array in Descending Order using reverse() method=====================");
array_roll_numbers.sort((a,b)=>{
    return a>b ? 1 : -1;
    });
array_roll_numbers.reverse();
console.log(array_roll_numbers);
console.log("Greatest number");
console.log(array_roll_numbers[0]);   
console.log("Smallest number");
let length = array_roll_numbers.length;
console.log(array_roll_numbers[length-1]);     
console.log("Array after removing duplicate elements");
const set = new Set(array_roll_numbers);
for (const element of set) {
    console.log(element);    
}
