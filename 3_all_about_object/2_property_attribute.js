/**
 * property attribute
 *
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
 * 2) 엑세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만, 다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티 ex. getter,setter
 */

const model = {
    name: 'John',
    age: 20,
};

console.log(Object.getOwnPropertyDescriptor(model, 'name'))
console.log(Object.getOwnPropertyDescriptor(model, 'age'))

/**
 * 1) value - 실제 값
 * 2) writable - 값을 수정할 수 있는지 여부, false -> 값 수정 불가
 * 3) enumerable - 열거가 가능한지 여부, for...in 룹 등을 사용할 수 있으면 true
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부, false일 경우 프로퍼티 삭제나, 어트리뷰트 변경 금지.
 *                   단, writable이 true인 경우 값 변경과 writable을 변경하는건 가능.
 */

console.log(Object.getOwnPropertyDescriptors(model));

const model2 = {
    name: 'Kim',
    year: 1993,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(model2);
console.log(model2.age);
model2.age = 20;
console.log(model2.age);
console.log(model2.year);

console.log(Object.getOwnPropertyDescriptor(model2, 'age'))

Object.defineProperty(model2,'height', {
    value: 172,
    writable: true,
    enumerable: true,
    configurable: true,
})

console.log(model2);
console.log(Object.getOwnPropertyDescriptor(model2, 'height'));
model2.height = 180;
console.log(model2);

/**
 * writable
 */
Object.defineProperty(model2,'height', {
    writable: false, // 변경못하도록 설정
})
console.log(Object.getOwnPropertyDescriptor(model2, 'height'));
model2.height = 190;
console.log(model2); // 변경되지 않음

/**
 * enumerable
 */

console.log(Object.keys(model2));
for (const key in model2){
    console.log(key);
}

Object.defineProperty(model2,'height', {
    enumerable: false,
})
console.log(Object.keys(model2)); // height 빠짐

for (const key in model2){
    console.log(key); // height 빠짐
}
console.log(model2); // height 빠짐

/**
 * configurable
 */

Object.defineProperty(model2,'height', {
    configurable: false,
})

console.log(Object.getOwnPropertyDescriptor(model2, 'height'));


Object.defineProperty(model2,'height', {
    enumerable: false,
});