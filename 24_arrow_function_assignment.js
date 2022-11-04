console.log("------------------1----------------------");
let show = () => {
    console.log("Good Afternoon, Today is Friday");
}
show();
console.log("------------------2----------------------");
let multiplication = (n1, n2, n3=1) =>{
console.log(`Result of multiplication after passing values ${n1}, ${n2}, ${n3}: ${n1*n2*n3} `);
}
multiplication(5,5,2)
multiplication(10,4)
console.log("------------------3----------------------");
let addition = (n1, n2, n3, n4, n5) =>{
return n1 + n2 + n3 + n4 + n5;
} 
console.log(`Addition of values 100,100,200,349,756: ${addition(100,100,200,349,756)}`);
console.log(`Addition of values I am, learning, ES6, features, in depth : ${addition("I am", " learning", " ES6", " features", " in depth")}`);
