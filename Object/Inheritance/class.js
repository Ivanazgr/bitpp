"use strict"


class Person {
    constructor(name, surname) {

        this.name = name;
        this.surname = surname;
    }
    getFullName() {
        return this.name + ' ' + this.surname
    }
}

class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname)
        this.job = job;
        this.salary = salary;

    }
    getData() {
        return super.getFullName() + " " + this.job + "" + this.salary
    }

    increaseSalary() {
        return this.salary + (this.salary * 10 / 100);
    }
}


class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary)
        this.specialization = specialization;
    }
    getSpecialization() {
        return this.specialization
    }
}

class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary)
        this.department = department;
    }

    getDepartment() {
        return this.department;

    }

}



var Pera = new Person('Pera', 'Peric');

var worker = new Employee('Mika', 'Mikic', 'Programer', '10000');

var dev = new Developer('Frontend');

var manager = new Manager('BIT');

console.log(worker.getData());

console.log(worker.increaseSalary());