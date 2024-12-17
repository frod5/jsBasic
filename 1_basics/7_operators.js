/**
 * Operators
 * 연산자
 *
 */

/**
 * 산술 연산자
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log('-------------');

console.log(10 * (10 + 10));

/**
 * 증가와 감소
 */
let number = 1;
number++;
console.log(number);
number--;
console.log(number);
console.log('-------------');

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);
result = number++;
console.log(result, number);

result = number--;
console.log(result, number);

result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +,- 사용하면 어떻게 될까?
 */
let sample = '99';
console.log(+sample);
console.log(typeof +sample); // number

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample); // number - 1

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = 'KIM';
console.log(+sample); // NaN
console.log(typeof +sample);

sample = '99';
console.log(-sample); // -99
console.log(typeof -sample); //number

/**
 * 할당 연산자
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);
console.log("-------------");

/**
 * 비교 연산자
 * 1) 값의 비교 ==
 * 2) 값과 타입의 비교 ===
 */

console.log(5 == 5);
console.log(5 == '5');

console.log(5 === 5);
console.log(5 === '5');

console.log(5 !== 5);
console.log(5 !== '5');

console.log("-----------")
/**
 * 대소 관계 비교 연산자
 */

console.log(100 > 1);
console.log(100 < 1);
console.log(100 >= 1);
console.log(100 <= 1);
console.log("-----------")

/**
 * 삼항 조건 연산자
 */

console.log(10 > 0 ? "O" : "X");

/**
 * 논리 연산자
 * 1) &&
 * 2) ||
 */

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(false || true);
console.log(false || false);

console.log("--------------")

/**
 * 단축평가
 * &&를 사용했을 때 좌측이 true이면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */

console.log(true || 'text'); // true
console.log(false || 'text'); // text
console.log(false && 'text'); // false
console.log(true && 'text'); // text

console.log("-----------");

/**
 * 지수 연산자
 */
console.log(2**2) // 4
console.log(10**3) // 1000
console.log("-----------");

/**
 * null 연산자
 */
let name;
console.log(name);
name = name ?? 'text';
console.log(name);

name = name ?? 'text2';
console.log(name);

let name2;
name2 ??= 'text3';
console.log(name2);
