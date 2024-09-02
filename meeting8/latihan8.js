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