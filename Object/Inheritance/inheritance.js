function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.getFullName = function() {
    return this.name + " " + this.surname;
}





function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;

}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function() {
    return this.getFullName() + " " + this.salary;
}
Employee.prototype.increaseSalary = function() {
    return this.salary + (this.salary * 10 / 100);
}

function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function() {
    return this.specialization;
}


function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Employee.prototype.constructor = Employee;

Manager.prototype.getDepartment = function() {
    return this.department;
}


var Pera = new Person('Pera', 'Peric');

var worker = new Employee('Programer', '10000');

var dev = new Developer('Frontend');

var manager = new Manager('BIT');

console.log(worker.getData());