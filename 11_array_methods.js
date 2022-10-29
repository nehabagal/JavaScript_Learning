let arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
arrayOfNumbers[4] = 11;
console.log(typeof arrayOfNumbers);
//console.log(arrayOfNumbers);
console.log("==========unshift()=============");
arrayOfNumbers.unshift(5);
arrayOfNumbers.unshift(0, 99, 77, 66);
//console.log(arrayOfNumbers);
//console.log("========includes() method=======");
//console.log(arrayOfNumbers.includes(1));
//console.log(arrayOfNumbers.includes(9));
//console.log("=======Traverse the array using for loop======");
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index]; 
  //  console.log(element);
}

//console.log("=======Traverse the array in reverse order using for loop======");
let totalElements = arrayOfNumbers.length-1;
for (let index = totalElements; index >= 0; index--) {
    const element = arrayOfNumbers[index];
  //  console.log(element);
    
}

console.log("===========shift()==============");
let array = [11, 22, 47, 81];
console.log(array);
array.shift();
console.log(array);

console.log("============ slice() ===========");
let arrayNumbers = [1, 3, 7, 8, 9, 3, 7];
let slicedElements =  arrayNumbers.slice(2);
console.log(slicedElements);
let slicedValues = arrayNumbers.slice(1, 4);
console.log(slicedValues);

console.log("============ splice() ===========");
let array_numbers = [1, 3, 7, 8, 9, 3, 7];
console.log(array_numbers);
//let splicedElements =  array_numbers.splice(2, 2); //it will remove 2 array elements starting from index 2 
//let splicedElements = arrayNumbers.splice(2, 0, 22);
//console.log(splicedElements);
//array_numbers.splice(2, 0 ,22);
//array_numbers.splice(2, 1, 33); //1 will replace the value
//array_numbers.splice(2, 2, 44); //will replace 2 elements starting from index 2
array_numbers.splice(2, 1, 44, 55, 66); //will replace 1 element staring with index 2 and adds 55 and 66
console.log(array_numbers);

/*
console.log("============ splice() ===========");
let array_numbers = [1, 3, 7, 8, 9, 3];
console.log(array_numbers);
 // let splicedElements =  array_numbers.splice(4); // It remove elements from 4th index to the end
 // let splicedElements =  array_numbers.splice(2, 3) // It removes the total  element starting from index 2
 // console.log(splicedElements);
 // let splicedElements =  array_numbers.splice(2, 0, 22 ) // Will insert element 22 before index 2, 0 - means don't replace
 // array_numbers.splice(2, 1, 22);
 array_numbers.splice(2, 1, 22, 44, 66);
 console.log(array_numbers);
*/