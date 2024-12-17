/**
 * Hoisting
 */
console.log('Hello');
console.log('World');

/**
 * 호이스팅은 무엇인가?
 *
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것 처럼 느껴지는 현상.
 */

console.log(name); // undefined
var name = 'name1';
console.log(name);

// var name;
// console.log(name);
// name = 'name1';
// console.log(name);
// 위 코드가 실제론 이렇게 동작하는것 처럼 느껴짐 (호이스팅)

console.log(letName); // error 호이스팅 되지않음
console.log(constName); // error 호이스팅 되지않음
let letName = 'name2';
let constName = 'name3';