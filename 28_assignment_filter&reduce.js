class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("Employees from Wipro company using filter()");
let wiproEmp = array_employees.filter((person)=>{
return person.emp_company=="Wipro";
});
wiproEmp.forEach((element)=>{
console.log(element.emp_name, element.emp_company);
});
console.log("Employees from IT or HR Department");
let itHrDept = array_employees.filter((person)=>{
return ((person.emp_dept=="IT") || (person.emp_dept=="HR"));
}); 
itHrDept.forEach((element)=> console.log(element.emp_name, element.emp_dept));
console.log("Employees whos emp ID's are greater than 50 using filter()");
let empID = array_employees.filter((person)=>{
return person.emp_id>50;
});
empID.forEach((element)=>console.log(element.emp_name, element.emp_id));
console.log("Employees who's names starts with A, V or M ");
let avmEmp = array_employees.filter((person)=>{
return ((person.emp_name.startsWith("A")) || (person.emp_name.startsWith("V")) || (person.emp_name.startsWith("M")));
});
avmEmp.forEach((element)=>console.log(element.emp_name));
console.log("Average salary of all the employees of all departments");
let average = null;

let itEmployees = array_employees.filter((person)=>{
return person.emp_dept=="IT";
});

itEmployees.forEach((person)=>{
    person.emp_salary;
}
);
