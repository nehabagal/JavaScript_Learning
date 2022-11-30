const array_numbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log("====1. add 10 into each array element using map() method====");
console.log("Default Array");
console.log(array_numbers);
const newArray = array_numbers.map((element)=>{
return element + 10;
});
console.log("New array after adding 10 to each element");
console.log(newArray);
console.log("====2. Square each array element using map() method====");
const square = array_numbers.map((element)=>{
return element * element;
});
console.log(square);
console.log("====3. Add index value into its corresponding array element using map() method====");
const result = array_numbers.map((element, index)=>{
return element + index;
});
console.log(array_numbers);
console.log(result);