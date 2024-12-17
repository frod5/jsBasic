/**
 * Immutable Object
 */

const model = {
    name: 'John',
    year: 2017,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(model);

/**
 * Extensible
 */
console.log(Object.isExtensible(model));
model.sex = 'male'
console.log(model)

Object.preventExtensions(model); // extensible -> false
console.log(Object.isExtensible(model));
model.phone = '01012345678' // 값 추가 안됌
console.log(model)

delete model.sex; // 삭제는 됌
console.log(model)

/**
 * Seal
 */
const model2 = {
    name: 'John',
    year: 2017,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(model2);
console.log(Object.isSealed(model2)); // 기본값 false
Object.seal(model2);
console.log(Object.isSealed(model2)); // true
model2.sex = 'male'; // 추가 안됌
console.log(model2);

delete model2.name; // 삭제도 안됌
console.log(model2);

Object.defineProperty(model2,'name', {
    writable: false,
})

console.log(Object.getOwnPropertyDescriptor(model2,'name'));

/**
 * Freezed
 *
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */
const model3 = {
    name: 'John',
    year: 2017,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(model3);
console.log(Object.isFrozen(model3)); //기본 false
Object.freeze(model3);
console.log(Object.isFrozen(model3)); // true

model3.sex = 'male'; // 변경 X
console.log(model3);

/*Object.defineProperty(model3,'name', {
    value: 'Kim',
})*/ // 변경 불가
console.log(model3);

const model4 = {
    name: 'John',
    year: 2017,
    kim: {
        name: 'kim',
        year: 2018,
    }
};

Object.freeze(model4);// 하위 오브젝트는 적용되지 않음.
console.log(Object.isFrozen(model4)); // true
console.log(Object.isFrozen(model4.kim)); // false


