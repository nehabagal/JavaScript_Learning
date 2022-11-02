const array1 = [1,2,3];
const array2 = [4,5,6];
//const array3 = array1.concat(array2);
const array3 = [...array1, ...array2]; //merge two arrays using spread operator
console.log(array3);
var arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
arrayOfNumbers.push(22);
arrayOfNumbers.push(33);
arrayOfNumbers.pop();
console.log(arrayOfNumbers);
console.log(`Total number of available in array: ${arrayOfNumbers.length}`);
console.log(arrayOfNumbers[4]);
arrayOfNumbers[2] = 77;
console.log(arrayOfNumbers[2]);

let otherArray = [...arrayOfNumbers]; //creating deep copy using spread(...) operator
arrayOfNumbers[3] = 44;
console.table(arrayOfNumbers);
console.table(otherArray);