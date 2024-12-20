/**
 * 타입 변환
 *
 * 1) 명시적
 * 2) 암묵적
 */

let age = 30;

//명시적
let strAge = age.toString();
console.log(typeof strAge, strAge);

//암묵적
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2); // 982 string
console.log('98' * 2); // 196 number
console.log('98' - 2); // 96 number
console.log("---------");

/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof (99).toString())
console.log(typeof (true).toString())
console.log(typeof (Infinity).toString())

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'0.99', +'0.99');
console.log("-------------");

/**
 * Boolean 타입으로 변환
 */
console.log(!!"x")
console.log(!!"")
console.log(!!0)
console.log(!!'0')
console.log(!!undefined)
console.log(!!null)
console.log(!!{})
console.log(!![])

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 *
 * 모두 false
 */
