/**
 * Loops
 *
 * 1) for
 * 2) while
 */

for (let i = 0; i < 10; i++) {
    console.log(i);
}

/**
 * for...in
 */

const obj = {
    name: 'John',
    year: 2014,
}

for (let key in obj) {
    console.log(key); // key값 나옴
    console.log(obj[key]);
}

const arr1 = ['text1', 'text2', 'text3'];

for (let key in arr1) {
    console.log(key); // 배열은 index
}

/**
 * for...of
 */
for (let value of arr1) {
    console.log(value); // 배열의 값
}

/**
 * while
 */
let number = 0;
while (number < 10) {
    console.log(number);
    number++;
}

/**
 * do...while
 */
number = 0;

do {
    number++;
} while (number < 10);

console.log(number);
console.log("-------");
/**
 * break
 */

for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}

number = 0;
console.log("-------");

while (number < 10) {
    if (number === 5) break;
    number++;
    console.log(number);
}
console.log("-------");

/**
 * continue
 */

for (let i = 0; i < 10; i++) {
    if (i === 5) continue;
    console.log(i);
}