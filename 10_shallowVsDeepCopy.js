let myNumber = 123;
let yourNumber = myNumber; //Deep Copy
console.log(myNumber);
console.log(yourNumber);
myNumber = 456; //seperate copy
yourNumber = 678; //seperate copy
console.log(myNumber);
console.log(yourNumber);

let person = {
    name: "Mohit",
    age: 32,
    city: "Pune"
} 

let student = person; //shallow copy
console.log(person);
console.log(student);
student.age = 33;
console.log(person); //Single or same copy
console.log(student);

