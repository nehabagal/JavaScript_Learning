const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("Given Array : ", fruits_seasonal);
console.log("===================================1===================================");
console.log("First Element in the array :", fruits_seasonal[0]);
console.log("Last Element in the array :", fruits_seasonal[4]);
console.log("===================================2===================================");
fruits_seasonal.unshift("Papaya");
console.log("Array after adding Papaya before Banana : ", fruits_seasonal);
console.log("===================================3===================================");
fruits_seasonal.splice(4, 1);
console.log("Array after removing Mango : ", fruits_seasonal);
console.log("===================================4===================================");
fruits_seasonal.push("Pineapple");
console.log("Array after adding Pineapple at the last position : ", fruits_seasonal);
console.log("===================================5===================================");
fruits_seasonal.splice(4, 0, "Dragon Fruit")
console.log("Array after adding Dragon Fruit before Water Melon : ", fruits_seasonal);
console.log("===================================6===================================");
fruits_seasonal.splice(2, 1, "Kivi")
console.log("Array after replacing Orange with Kivi : ", fruits_seasonal);
console.log("===================================7===================================");
let sliced_array = fruits_seasonal.slice(1, 4);
console.log("Elements from index 1 to 4:", sliced_array);
console.log("===================================8===================================");
console.log("Last three elements in the array:");
let lengthArray = fruits_seasonal.length;
for(index = lengthArray-1; index>=4; index--){
    console.log(fruits_seasonal[index]);
}