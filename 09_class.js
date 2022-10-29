class Person{
        constructor(fullname, city, age, gender){
        this.fullName = fullname;
        this.city = city;
        this.age = age;
        this.gender = gender;

    }
    details(){
        console.log(`Person Details: ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    }

}

let sachin = new Person("Sachin Tendulkar", "Pune", 45, "Male");
sachin.details();
let rohit = new Person("Rohit Sharma", "Mumbai", 32, "Male");
console.log(sachin);
console.log(rohit);