console.log(10 + 10);
var num1 = 100, num2 = 30;

console.log("==========Plus Operator=============");
var result = num1 + num2;
console.log(`Result is ${result}`);

console.log("==========Minus Operator=============");
var result2 = num2 - num1;
console.log(`Result is ${result2}`);

console.log("==========Multiplication Operator=============");
var result3 = num2 * num1;
console.log(`Result is ${result3}`);

console.log("==========Division Operator=============");
var result4 = num1 / num2;
console.log(`Result is ${result4}`);

console.log("==========Modular Operator=============");
var result5 = num1 % num2;
console.log(`Result is ${result5}`);

console.log("==========Increment Operator=============");
var result6 = ++num1;
console.log(`Result is ${result6}`);

console.log("==========Decrement Operator=============");
var result7 = --num2;
console.log(`Result is ${result7}`);

console.log("==========Compound Addition Operator=============");
num3 = 100, num4 = 50;
num3 += num4;
console.log(`Result is ${num3}`);

console.log("==========Compound Subtraction Operator=============");
num3 = 100, num4 = 50;
num3 -= num4;
console.log(`Result is ${num3}`);

console.log("==========Compound Multiplication Operator=============");
num3 = 100, num4 = 50;
num3 *= num4;
console.log(`Result is ${num3}`);

console.log("==========Compound Division Operator=============");
num3 = 100, num4 = 50;
num3 /= num4;
console.log(`Result is ${num3}`);

console.log("==========Comparison Operator Operator=============");
num3 = 100, num4 = 50, num5 = 50;
console.log(`num3==num4 ===> ${num3 == num4}`);
console.log(`num5==num4 ===> ${num5 == num4}`);
console.log(`num3<num4 ===> ${num3 < num4}`);
console.log(`num3>num4 ===> ${num3 > num4}`);
console.log(`num3!=num4 ===> ${num3 != num4}`);
console.log(`num4<=num5 ===> ${num4 <= num5}`);
console.log(`num4<num5 ===> ${num4 < num5}`);
console.log(`num4>=num5 ===> ${num4 >= num5}`);
console.log(`num4>num5 ===> ${num4 > num5}`);

console.log("**************** == and === Operators *************");
var num6 ="50";
console.log(`num5==num6 ===> ${num5 == num6}`); //it only checks value of operands insted of data type and does type conversion
console.log(`num5===num6 ===> ${num5 === num6}`); //it checks data type of operands while comparing