/**
 * Prototype
 */
const testObj = {};

//__proto__ 모든 객체에 존재하는 프로퍼티
// class 강의에서 상속에서 부모 클래스에 해당되는 값.
console.log(testObj.__proto__);

function Model(name, year) {
    this.name = name;
    this.year = year;
}

console.log(Model.prototype);
console.dir(Model.prototype, {
    showHidden: true
});

//circular reference
console.log(Model.prototype.constructor === Model); // true
console.log(Model.prototype.constructor.prototype === Model.prototype); // true

const model = new Model('Lee', 1987);
console.log(model.__proto__);
console.log(model.__proto__ === Model.prototype); //true
console.log(testObj.__proto__ === Object.prototype); //true

console.log(Model.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); //true
console.log(Model.prototype.__proto__ === Object.prototype); //true

console.log(model.toString());
console.log(Object.prototype.toString())

function Model2(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return `${this.name}이 인사를 합니다.`;
    }
}

const model2 = new Model2('Lee', 1987);
const model3 = new Model2('Kim', 1980);
console.log(model2.sayHello())
console.log(model3.sayHello())
console.log(model2.sayHello() === model3.sayHello()); //false

console.log(model2.hasOwnProperty('sayHello')); //true

function Model3(name, year) {
    this.name = name;
    this.year = year;
}

Model3.prototype.sayHello = function () {
    return `${this.name}이 인사를 합니다.`
}

const model4 = new Model3('Kim', 1987);
const model5 = new Model3('Lee', 1987);
console.log(model4.sayHello())
console.log(model5.sayHello())
console.log(model4.sayHello === model5.sayHello); //true

console.log(model4.hasOwnProperty('sayHello')); // false

Model3.sayStaticHello = function () {
    return '안녕하세요 저는 static method 입니다.'
};

console.log(Model3.sayStaticHello())

/**
 * override
 */
function Model4(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return `안녕하세요 저는 instance 메소드입니다.`
    }
}

Model4.prototype.sayHello = function () {
    return '안녕하세요 저는 prototype 메소드 입니다.'
}

const model6 = new Model4('Kim', 1987);
console.log(model6.sayHello())


/**
 * getPrototypeOf, setPrototypeOf
 *
 * 인스턴스의 __proto__ 변경 VS 함수의 prototype 변경
 */
function Model(name, year) {
    this.name = name;
    this.year = year;
}

Model.prototype.sayHello = function () {
    return `${this.name} 인사를 합니다.`
}

function FemaleModel(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function () {
        return `${this.name}이 춤을 춥니다.`;
    }
}

const model10 = new Model('sung', 2010)
const femaleModel10 = new FemaleModel('kim', 1996)

console.log(model10.__proto__)
console.log(model10.__proto__ === Model.prototype);
console.log(Object.getPrototypeOf(model10) === Model.prototype);

console.log(model10.sayHello())
console.log(femaleModel10.dance())

Object.setPrototypeOf(femaleModel10, Model.prototype); // 변경
console.log(femaleModel10.sayHello())

console.log(femaleModel10.constructor === FemaleModel); // false
console.log(femaleModel10.constructor === Model); //true
console.log(Object.getPrototypeOf(femaleModel10) === FemaleModel.prototype); //false
console.log(Object.getPrototypeOf(femaleModel10) === Model.prototype); //true
console.log(FemaleModel.prototype === Model.prototype); //false

FemaleModel.prototype = Model.prototype;

const femaleModel2 = new FemaleModel('park', 2011);
console.log(Object.getPrototypeOf(femaleModel2) === FemaleModel.prototype); //true
console.log(FemaleModel.prototype === Model.prototype); // true

