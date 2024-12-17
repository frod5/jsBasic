/**
 * Naming Conventions
 *
 * 변수 네이밍
 * 1) 일반적으로 영어를 사용하여 문자와 숫자를 모두 사용
 * 2) 특수기호는 _, $ 사용 가능
 * 3) 숫자로 이름 시작 x
 * 4) 키워드 사용 불가 (ex. var)
 */

let value = 'value';
var $value = '$value';
const _value = '_value';
console.log(value);
console.log($value);
console.log(_value);

// let 1name = '1';  error
// let const = 'error';  // error

/**
 * Naming convention 2
 *
 * 1) camelCase - 대부분의 언어에서 사용
 * 2) snake_case - 파이선
 * 3) PascalCase - C#
 */

const textName = 'textName'; // camelCase
console.log(textName);