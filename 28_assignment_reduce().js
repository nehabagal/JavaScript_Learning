const array_numbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log("Find sum of all numbers");
let sum = array_numbers.reduce((element, runningTotal)=>{
return element + runningTotal;
});
console.log(sum);
console.log("Find sum of all even numbers");
 let evenNumbers = array_numbers.filter((element)=>{
return element%2==0;
 });
 console.log(evenNumbers);
 let sumEven = evenNumbers.reduce((value, total)=>{
return value + total;
 });
 console.log(sumEven);