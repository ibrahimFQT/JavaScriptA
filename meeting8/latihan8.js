//soal 1 start
class vehicle {
    constructor (brand) {
        this.brand = brand;
    }

    start() {
        return `${this.brand} is starting`;
    }
}

class car extends vehicle {
    constructor (brand,model) {
        super(brand);
        this.model = model;
    }
   
    start() {
        return `${this.brand} is starting`;
    }
    
}

let car1 = new car ("lamborghini","aventador")
console.log(car1.start());

//soal 1 clear

//soal 2 start

class shape {
    draw() {
        return "drawing shape";
    }
}

class rectangle extends shape {
    draw() {
        return "drawing rectangle";
    }
}

let rectangle1 = new rectangle();
console.log(rectangle1.draw());

//soal 2 clear

//soal 3 start

class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        return `Hi, my name is ${this.name}`;
    }
}

class Employee extends Person {
    constructor(name, position) {
        super(name);
        this.position = position;
    }

    introduce() {
        return `Hi, my name is ${this.name} and I am an ${this.position}`;
    }
}

class Manager extends Employee {
    introduce() {
        return `Hi, my name is ${this.name}, I am an ${this.position}, and I manage a team`;
    }
}

let person = new Person("Ibrahim");
console.log(person.introduce());

let employee = new Employee("Fadel", "Angkatan 2");
console.log(employee.introduce());

let manager = new Manager("Wildan", "Angkatan 1");
console.log(manager.introduce());

//soal 3 clear