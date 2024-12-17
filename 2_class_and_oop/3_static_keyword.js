/**
 * Static keyword
 */

class Model1 {
    name;
    year;
    static teamName = 'JYP';

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static returnTeamName() {
        return this.teamName
    }
}

const model = new Model1('lee', 2003);
console.log(model);

console.log(Model1.teamName)
console.log(Model1.returnTeamName())

/**
 * factory constructor
 */

class Model2 {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static fromObject(obj) {
        return new Model2(
            obj.name,
            obj.year,
        );
    }

    static fromList(list) {
        return new Model2(list[0], list[1]);
    }
}

// const model2 = new Model('lee', 2003);
const model2 = Model2.fromObject({name: 'John', year: 2000});
console.log(model2);

const model3 = Model2.fromList(['lee',3000]);
console.log(model3);