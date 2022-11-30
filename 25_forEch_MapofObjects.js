class Employee {
constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
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

const map0fEmployees = new Map();
map0fEmployees.set(22, emp_anil);
map0fEmployees.set(33, emp_radha);
map0fEmployees.set(55, emp_rishi);
map0fEmployees.set(66, emp_sonali);
map0fEmployees.set(77, emp_monika);
map0fEmployees.set(88, emp_viny);
map0fEmployees.set(99, emp_mahi);

map0fEmployees.forEach((employee, key)=>{
console.log(`${key}====> Name: ${employee.emp_name}, Dept: ${employee.emp_dept}, Company: ${employee.emp_company}, Salary: ${employee.emp_salary}`);
})