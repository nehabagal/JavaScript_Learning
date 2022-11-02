const arrayOfNames = ['Kamat', 'Memon','Nashpati','Taimur','Menon','Kamat','Andy','Taimur'];
console.log(`Given Array: ${arrayOfNames}`);
//console.log(`Length of Given Array: ${arrayOfNames.length}`); 
const newArray = [...new Set(arrayOfNames)];
console.log(`Array after removing duplicates: ${newArray}`);
//console.log(`Length of array after removing duplicates: ${newArray.length}`);
let numberofDuplicates =  arrayOfNames.length - newArray.length;
console.log(`Total number of duplicates: ${numberofDuplicates}`);
console.log(`Total number of unique elements: ${newArray.length}`);