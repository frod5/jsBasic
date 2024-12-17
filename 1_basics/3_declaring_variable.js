/**
 * Variable 선언
 *
 * 1) var - 더 이상 쓰지 말자.
 * 2) let
 * 3) const
 */

var name = 'hello world';
console.log(name);

var age = 30;
console.log(age);

let text = 'text';
console.log(text);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */

text = 'text1';
console.log(text);

const textConst = 'textConst';
console.log(textConst);

// textConst = 'textConst1'; // error

/**
 * 선언과 할당
 *
 * 1) 변수를 선언하는 것.
 * 2) 할당
 */
// var name; 선언
// name = 'name1'; 할당

let value;
console.log(value); // undefined

// const value2; // error. const는 무조건 선언과 할당 해야함.
