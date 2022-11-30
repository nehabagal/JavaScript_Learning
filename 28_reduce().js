const arrayOfNumbers=[2,3,5,4,6,1];
let sum = arrayOfNumbers.reduce((value, runningTotal)=>{
return value + runningTotal;
});
console.log(sum);

let sum1 = arrayOfNumbers.reduce((value, runningTotal)=>{
return value + runningTotal;
}, 100 );  //sum starts at 100
console.log(sum1);

//Find Average using reduce
let average = null;
let sum2 = arrayOfNumbers.reduce((runningTotal,value,index)=>{
runningTotal = runningTotal + value;
if(index<arrayOfNumbers.length-1){
average = runningTotal / arrayOfNumbers.length; 
}
return runningTotal;
});
console.log(`Average: ${average}, Sum of all elements: ${sum2}, Total number of Elements: ${arrayOfNumbers.length}`);