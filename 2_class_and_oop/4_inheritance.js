/**
 * Inheritance
 */
class Model {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleModel extends Model {
    dance() {
        return `${this.name}이 춤을 춘다.`;
    }
}

class MaleModel extends Model {
    sing() {
        return `${this.name}이 노래를 부릅니다.`;
    }
}


const female = new FemaleModel('lee', 2003);
console.log(female);
console.log(female.dance());

const male = new MaleModel('kim', 1996);
console.log(male);
console.log(male.sing());

const person = new Model("kim", 1993);
console.log(person);
// console.log(person.dance()) 부모가 자식을 받지 못함.

console.log(female instanceof FemaleModel);
console.log(female instanceof Model);
console.log(female instanceof MaleModel);
