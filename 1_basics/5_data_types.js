/**
 * Data Types
 *
 * 여섯개의 기본타입
 * 한개의 오브젝트 타입
 *
 * 기본타입
 * 1) Number
 * 2) String
 * 3) Boolean
 * 4) undefined
 * 5) null
 * 6) Symbol
 *
 * 오브젝트
 * 1) Object
 */


/**
 * Number Type
 */
const age = 30;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log("----------------");

const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof infinity);
console.log(typeof nInfinity);
console.log("----------------");

/**
 * String
 */
const str = "str";
console.log(typeof str);

const text = "text 'test'"; // '' 표현
console.log(text);

/**
 * Template Literal
 *
 * Escape Character
 * 1) newLine -> \n
 * 2) tab -> \t
 * 3) 백슬래쉬 -> \\
 */
const iceAmericano = '아이스\n아메리카노';
console.log(iceAmericano);
const hotAmericano = '따뜻한\t아메리카노';
console.log(hotAmericano);
const backSlash = 'back\\slash';
console.log(backSlash);

const templateLiteral = `아이스
아메리카노`;
console.log(templateLiteral);

const ice = '아이스';
console.log(`${ice}` + "아메리카노");

/**
 * Boolean
 */

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * undefined
 *
 * 사용자가 직접 값을 초기화하지 않을때 지정되는 값
 * 직접 undefined로 값을 초기화하는건 지양.
 */
let noInit;
console.log(noInit); // 값도 undefined
console.log(typeof noInit);

/**
 * null
 *
 * undefined와 같이 없다는 뜻이나,
 * 개발자가 명시적으로 없는 값으로 초기화 할때 사용
 */
let init = null;
console.log(init);
console.log(typeof init); // Object

/**
 * Symbol
 * 유일무이한 값을 생성할 때 사용
 * 다른 기본타입과 다르게 Symbol 함수를 호출하여 사용
 */
const test1 = '1';
const test2 = '1';

console.log(test1 === test2); //true

const symbol = Symbol('1');
const symbo2 = Symbol('1');
console.log(symbol === symbo2); // false

/**
 * Object
 *
 * Map
 * 키-밸류 쌍
 * key:value
 */
const dictionary = {
    red:'빨간색',
    orange:'주황',
    yellow:'노랑',
}

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(typeof dictionary);

/**
 * Array
 *
 * 값을 리스트로 나열 할 수 있는 타입
 */
const arr1 = [
    'text1',
    'text2',
    'text3',
];

console.log(arr1);

/**
 * index
 * 0부터 시작 1씩 증가
 */
console.log(arr1[1]);
arr1[0] = 'text0';
console.log(arr1);
console.log(typeof arr1);

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시 (Java)
 *
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고, 값에 의해 추론한다. (JS)
 *
 */