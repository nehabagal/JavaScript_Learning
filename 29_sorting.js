const array_numbers = [11,42,600,345,230,789,100,450];
array_numbers.sort((a,b)=>{
return a>b ? -1 : 1;
});
console.log(array_numbers);