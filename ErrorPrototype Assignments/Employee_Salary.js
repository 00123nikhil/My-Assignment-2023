class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary() {
        return `hey,${this.name} here is your hardwork ${this.salary}`;
    }
}

const EmpSal = new Employee('Suraj', 'Senior software Engineer', '200000').getSalary();
console.log(EmpSal);