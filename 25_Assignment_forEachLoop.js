const array_numbers = [1,-7,40,502,-77,91,0,108,89,-601];
console.log("1. Log array elements with its index using forEach() with arrow function");
array_numbers.forEach((currentValue, index)=> console.log(`Current Value is ${currentValue} and Index is ${index}`))
console.log("2. Find positive numbers and log on console using forEach() with arrow function");
array_numbers.forEach((currentValue, index)=>{
if(currentValue>=0){
console.log(`Positive number is ${currentValue} and Index is ${index}`);
}
})
console.log("3. Find negative numbers and log on console using forEach() with arrow function");
array_numbers.forEach((currentValue, index)=>{
if(currentValue<0){
console.log(`Negative number is ${currentValue} and Index is ${index}`);
}
})
console.log("4. Find even numbers and log on console using forEach() with arrow function");
array_numbers.forEach((currentValue,index)=>{
if(currentValue%2==0){
    console.log(`Even number is ${currentValue} and Index is ${index}`);
}
})
console.log("5. Find sum of all array elements and log sum on console");
let sum=0;
array_numbers.forEach((currentValue)=>{
sum=sum+currentValue;
})
console.log(`Sum of all array elemets is ${sum}`);
console.log("6. Log only even positioned array values on console using foreach() and arrow function");
array_numbers.forEach((currentValue,index)=>{
if(index%2==0){
    console.log(`Even positioned number is ${currentValue} and it's index is ${index}`);
}
})
console.log("7. Log odd positioned array values if it is negative using foreach() and arrow function");
array_numbers.forEach((currentValue,index)=>{
if(index%2!==0 && currentValue<0){
    console.log(`Odd positioned and negative number is ${currentValue} and it's index is ${index}`);
}
})