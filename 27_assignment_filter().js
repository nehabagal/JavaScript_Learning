const array_numbers =[20,11,40,25,37,49,9,90,60,2,19];
console.log("Find out all numbers which are greater than 50 using filter() method");
let newArray = array_numbers.filter((element)=>{
return element>50;
});
console.log(newArray);

console.log("Find out all even numbers using filter() method");
let evenNumbers = array_numbers.filter((element)=>{
return element%2==0;
});
console.log(evenNumbers);

console.log("Find out all odd numbers using filter() method");
let oddNumbers = array_numbers.filter((element)=>{
return element%2!==0;
});
console.log(oddNumbers);

console.log("Find out all numbers which are multiple of 5 using filter() method");
let multipleNumbers = array_numbers.filter((element)=>{
return element%5==0;
});
console.log(multipleNumbers);

console.log("Find out all numbers between 20 & 50 using filter() method");
let array = array_numbers.filter((element)=>{
return element>20 && element<50;
});
console.log(array);