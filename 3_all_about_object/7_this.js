/**
 * this
 *
 * JS는 Lexical scope를 사용하기 떄문에 함수의 상위 스코프가
 * 정의 시점에 평가된다. 하지만 this는 키워드는 바인딩이 객체가 생성되는 시점에 결정
 */

const testFunction = function () {
    return this
}

console.log(testFunction()); // global
console.log(testFunction() == global); // true

const model = {
    name: 'John',
    year: 2020,
    sayHello: function () {
        return `Hello, I'm ${this.name}`
    }
}
console.log(model.sayHello());

function Person(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return `Hello, I'm ${this.name}`
    }
}

const person = new Person('Kim', 2003);
console.log(person.sayHello());

Person.prototype.dance = function () {
    function dance2() {
        return `${this.name}이 춤을 춥니다.`
    }

    return dance2()
}
console.log(person.dance());

/**
 * this 키워드가 어떤 걸 가르키냐는 3가지만 기억하면된다
 *
 * 1) 일반 함수 호출할땐 this가 최상위 객체 (global or window) 가르킨다.
 * 2) 메소드(객체안의 함수)로 호출할땐 호출된 객체를 가르킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을땐 객체를 가르킨다.
 */

/**
 * 1) apply()
 * 2) call()
 * 3) bind()
 */
function returnName() {
    return this.name //global
}

console.log(returnName());

const person2 = {
    name: 'Lee',
}

console.log(returnName.call(person2))
console.log(returnName.apply(person2))

/**
 * 1) call -> 컴마를 기반으로 아규먼트를 순서대로 넘겨주고
 * 2) apply -> 아규먼트를 리스트로 입력해야한다.
 */

function multiply(x, y, z) {
    return `${this.name} / 결과값: ${x * y * z}`
}

console.log(multiply.call(person2,3,4,5))
console.log(multiply.apply(person2,[3,4,5]))

/**
 * bind
 */
const laterFunc = multiply.bind(person2,3,4,5)
console.log(laterFunc)
console.log(laterFunc())
