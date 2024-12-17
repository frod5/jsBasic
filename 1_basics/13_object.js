/**
 * Object / 객체
 */

//key:value pair
let person = {
    name: 'John',
    age: 4,
    eat: function() {
        return `${this.name}이 밥을 먹는다.`
    },
    /*eat: () => {
        return `${this.name}이 밥을 먹는다.`
    }*/
};

console.log(person);
console.log(person.name);
console.log(person['name']);

const key = 'name';
console.log(person[key]);

console.log(person.eat())

const nameKey = 'name';
const nameValue = 'Kim';

const ageKey = 'age';
const ageValue = 20;

const person2 = {
    [nameKey]: nameValue,
    [ageKey]: ageValue,
    eat: function() {
        return `${this.name}이 밥을 먹는다.`
    },
}

console.log(person2);
console.log(person2.eat());

person2.age = 30;
// person2['age'] = 30
console.log(person2)

person2['sex'] = 'male';
console.log(person2)

delete person2['sex'];
console.log(person2)

/**
 * 객체의 특징
 *
 * 1) const로 선언할 경우 객체 자체를 변경할 수는 없다.
 * 2) 객체안의 프로퍼티나 메소드는 변경 가능
 */

const person3 = {
    name: 'Lee',
    age: 35,
}
console.log(person3)

// person3 = {} // const선언으로 변경할 수 없다.
person3.age = 25; // 프로퍼티 변경 가능
console.log(person3)

/**
 * 모든 키값 다 가져오기
 */

console.log(Object.keys(person3))

/**
 * 모든 value 다 가져오기
 */

console.log(Object.values(person3));

const name = 'Sung';
const person4 = {
    name,
}

console.log(person4)