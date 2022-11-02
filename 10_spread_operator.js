let person = {
    name: "Mohit",
    age: 32,
    city: "Pune",
    address: {
pin: 411030,
street: "ABC Road"
    }
}

console.log(person.name, person.age, person.city);
console.log(person);

//let student = {...person}; //spread operator for creating deep copy
let student = JSON.parse(JSON.stringify(person)); //JSON.parse for creating deep copy and overcomes limitations of nested object
console.log(person);
student.age = 33; //deep copy
console.log(student.age); 
console.log(person.age);
person.city = "Mumbai"; //deep copy
console.log(person.city, student.city);
student.address.street = "Galli";  //spread operator fails incase of nested objects
console.log(person.address.street, student.address.street);