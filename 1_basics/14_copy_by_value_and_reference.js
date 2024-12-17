/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 *
 * 1) 기본적으로 모든 기본 타입 값은 copy by value
 * 2) Object는 copy by reference
 */

let original = '안녕';
let clone = original;
console.log(original, clone)

console.log("--------------")

clone += '하세요';
console.log(original, clone)

let originObj = {
    name : 'john',
    age : 20,
}

let cloneObj = originObj;

console.log(originObj, ' | ' ,cloneObj);
originObj.name = 'lee';
console.log(originObj, ' | ' ,cloneObj);


/**
 * spread Operator
 */

const person = {
    ...originObj
}

console.log(person);

const person2 = {
    ...person,
    sex: 'male',
}
console.log(person2);

const person3 = {
    name : "kim",
    ...person,
}

console.log(person3); // name : lee -> ...person 연산자가 나중에 실행되어 name : "kim"을 덮어 씌움

const person4 = {
    ...person,
    name: "kim",
}

console.log(person4); // name: kim -> 나중에 실행되어 덮어 씌움 spread Operator 실행 순서 중요 (Array도 마찬가지).