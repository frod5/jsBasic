/**
 * Super and Override
 */

class Model {
    name;
    year;
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `Hello I'm ${this.name}`;
    }
}

class FemaleModel extends Model {
    part;

    constructor(name, year, part) {
        super(name, year);
        this.part = part;
    }

    sayHello() {
        // return `hello I'm ${this.name} v.v`;
        return `${super.sayHello()} v.v`;
    }
}

const female = new FemaleModel("kim", 2000, 'partA');
console.log(female);
console.log(female.sayHello());

const model = new Model('lee', 1993);
console.log(model);
console.log(model.sayHello());