//const ex5 = require('./example5');
const Person = require('./example5').Person;
//class Employee extends ex5.Person{
class Employee extends Person{
    constructor(name, age, salary)
    {
        super(name,age);
        this.salary=salary;
    }

    payslip()
    {
        this.print();
        console.log("Salary: "+ this.salary);
    }
}

let e= new Employee("Jack",23,1200);
e.payslip();