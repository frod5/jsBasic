/**
 * Class keyword
 */
class Model {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayName() {
        console.log(`내 이름은: ${this.name} 입니다`)
    }
}

let model = new Model('kim', 2020);
console.log(model);
let model2 = new Model('lee', 2018);
console.log(model2);
let model3 = new Model('sung', 2014);
console.log(model3);

console.log(model3.name);
console.log(model2.sayName());
console.log(model3.sayName());

console.log(typeof Model);
console.log(typeof model3);