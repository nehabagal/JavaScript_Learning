const array_numbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
const lengthArray = array_numbers.length;
console.log("1. Total Elements available or Length of the array: ", lengthArray);
console.log("2. First and Last element in array_numbers: ", array_numbers[0], array_numbers[10]);
console.log("3. Third last element in array_numbers: ", array_numbers[lengthArray-3]);
console.log("4. All the even numbers from array_numbers: ");
for(index=0; index<=lengthArray; index++){
  if(array_numbers[index]%2==0){
console.log(array_numbers[index]);
  }
}
console.log("5. All the odd numbers from array_numbers: ");
for(index=0; index<=lengthArray-1; index++){
    if(array_numbers[index]%2!=0){
console.log(array_numbers[index]);
    }
}
console.log("6. All the even positioned elements from array_numbers: ");
for(index=0; index<=lengthArray; index++){
if(index%2==0){
    console.log(array_numbers[index]);
}
}
console.log("7. All the odd positioned elements from array_numbers: ");
for(index=0; index<=lengthArray-1; index++){
if(index%2!=0){
    console.log(array_numbers[index]);
}
}

var sum = 0;
for (const index in array_numbers) {
        sum = sum + array_numbers[index];
    }
    console.log("8. Sum of all elements from array_numbers: ", sum);

console.log("9. The numbers which are multiple of 5: ");
for(index=0; index<=lengthArray-1; index++){
if(array_numbers[index]%5==0){
    console.log(array_numbers[index]);
}
}
console.log("10. Is number 115 available in array_numbers: ", array_numbers.includes(115));
console.log("11. Is number 23 available in array_numbers: ", array_numbers.includes(23));