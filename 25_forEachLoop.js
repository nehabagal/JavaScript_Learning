//forEach Loop
const arrayNumbers = [10,20,30,40,20,10];
arrayNumbers.forEach(function(currentValue, index, array){ //arguments to be passed to forEach loop are current value, index and array
console.log(currentValue, index, array);
})

//using arrow function
arrayNumbers.forEach((currentValue)=>{ //index and array paramneters are optional in forEach loop
    console.log(currentValue);
    })
//shorthand of above arrow function
arrayNumbers.forEach(currentValue=>console.log(currentValue));
arrayNumbers.forEach((currentValue, index)=>console.log(currentValue, index));
//Traversing set using foreach()
console.log("Traversing set using forEach()");
const setOfNumbers=new Set(arrayNumbers);
setOfNumbers.forEach(value => console.log(value))  //argument to be passed is only current value
//Traversing map using forEach()
console.log("Traversing map using forEach()");
const map = new Map;
map.set(22,"Sachin");
map.set(11,"Dravid");
map.set(33,"Ganguly");
map.set(77,"Sachin");
map.forEach((key, value)=>console.log(key,value));  //argument to be passed is key and value
console.log("Traversing array of objects using forEach");
class Person{
    constructor(fullname,city,gender){
     this.fullname = fullname;
     this.city = city;
     this.gender = gender
    }
    details(){
        console.log(`Person Details: ${this.fullname} , ${this.city} , ${this.gender}`);
    }
}

let personAnil = new Person("Anil", "Pune", "Male");
let personMohit = new Person("Mohit", "Mumbai", "Male");
let personAnita = new Person("Anita","Hyderabad","Female");
let personJenny = new Person("Jenny","NY","Female");
const arrayofPerson = [personAnil, personMohit, personAnita, personJenny];

arrayofPerson.forEach((person)=>{
console.log(person.details());
})