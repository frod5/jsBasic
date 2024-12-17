/**
 * Getter and Setter
 */

class Model {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    /**
     * 1) 데이터를 가공해 새로운 데이터를 반환할 때
     * 2) private한 값을 반환할 때
     */
    get nameAndYear() {
        return `${this.name} - ${this.year}`;
    }

    set name(name) {
        this.name = name;
    }
}

const model1 = new Model("kim", 2000);
console.log(model1);
console.log(model1.nameAndYear);

model1.name = 'lee';
console.log(model1)

class Model2 {
    #name;  // private #문법 es7
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }

    get name() {
        return this.#name
    }

    set name(name) {
        this.#name = name;
    }
}

const model2 = new Model2('sung', 1995);
console.log(model2);
console.log(model2.name);

model2.name = 'lee';
console.log(model2.name);
