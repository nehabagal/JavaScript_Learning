let mohitPerson = {
    fullMName: "Mohit",
    age: 42,
    isMarried: true,
}

console.log(Object.entries(mohitPerson));
console.log(Object.keys(mohitPerson));
console.log(Object.values(mohitPerson));

let person = {
    fullName: "Sachin Tendulkar",
    age: 42,
    isMarried: true,
    address: {                     //nested object
        street: "AS Club",
        pin_code: 123456,
        city: "Pune",
        state: "MH",
    },
    eat: function(){
        console.log("I Am Vegetarian");
    },
    details: function () {
     return `Details are: ${this.fullName}, ${this.age}, ${this.address.city}`;  
    }
}

let personalDetails = person.details();
console.log(personalDetails);
person.eat();
person.address.landmark = "near main road";
console.log(person.address.street);
console.log(typeof person);
//console.log(person);
console.table(person.address);
person.fullName = "Sachin Ramesh Tendulkar";      //update value of property
person.pincode = 123456;                         //we can dynamically add properties to the object(outside object)
person.profession = "Cricketer";
delete person.age;                              //delete the property
//console.table(person);

console.log(person["age"]);
var fullName = person.fullName;
console.log(fullName);
console.log(person.fullName);
console.log(person.isMarried);