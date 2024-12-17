/**
 * function
 */

/**
 * 만약 2라는 숫자에 * 10/ 2 % 3 스트링으로 변환해서
 * 반환받고 싶다면 어떻게 해야할까
 */

function calculate(number) {
    console.log((number * 10 / 2 % 3).toString());
}

calculate(2);
calculate(3);

/**
 * Return
 */
function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(2, 2));

/**
 * Arrow 함수
 */
const multiply2 = (num1, num2) => {
    return num1 * num2;
}

console.log(multiply2(2, 4));

const multiply3 = (num1, num2) => num1 * num2;
console.log(multiply3(3, 4));

const multiply4 = num1 => num1 * 2;

const multiply5 = x => y => z => `x: ${x} y:${y} z:${z}`
console.log(multiply5(2)(5)(7));

function multiply6(x) {
    return function (y) {
        return function (z) {
            return `x: ${x} y:${y} z:${z}`;
        }
    }
}

console.log(multiply6(2)(5)(7));

const multiplyTwo = function (num1, num2) {
    return num1 * num2;
}

console.log(multiplyTwo(2, 5));

const multiplyThree = function (num1, num2, num3) {
    console.log(arguments);
    return num1 * num2 * num3;
}

console.log(multiplyThree(2, 4, 7));

const multiplyAll = function (...args) {
    return Object.values(args).reduce((a, b) => a * b, 1);
}

console.log(multiplyAll(2, 3, 4, 5, 6, 7, 8, 10));

(function (x, y) {
    console.log(x * y);
})(4,5)

console.log(typeof multiply)
console.log(multiply instanceof Object)