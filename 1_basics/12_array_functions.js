/**
 * array functions
 */

let members = [
    'member1',
    'member2',
    'member3',
    'member4',
    'member5',
];

console.log(members);

//push()
console.log(members.push('member6'));
console.log(members);

//pop()
console.log(members.pop());
console.log(members);

//shift()
console.log(members.shift()); // 첫번째 값을 반환 받고 삭제
console.log(members);

//unshift()
console.log(members.unshift('member1')); // 첫번째에 값 추가
console.log(members);

//splice()
console.log(members.splice(0, 3));
console.log(members);

members = [
    'member1',
    'member2',
    'member3',
    'member4',
    'member5',
];

console.log("--------------------------");

// concat()
console.log(members.concat('member6')); // 값 추가, 새로운 배열로 만들어서 반환 (원본배열 건드리지 않음)
console.log(members);

//slice()
console.log(members.slice(0, 3)); // 값 추출, 새로운 배열 만들어서 반환 (원본배열 건드리지 않음)
console.log(members);

//spread operator
let members2 = [
    ...members, // spread 펼쳐서
];

console.log(members2);

let members3 = [
    members, // 리스트안에 리스트
]

console.log(members3);

//join()
console.log(members.join()) // ,로 붙여서 string으로 반환
console.log(members.join('/')) // '/'로 붙여서 string 반환

//sort() 원본 배열 건드림
//기본 오름차순
console.log(members.sort());
console.log(members.reverse());

let numbers = [1, 9, 7, 5, 3,];
console.log(numbers);

// a,b를 비교 했을때
// 1) a를 b보다 나중에 정렬하려면 (뒤에) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => a > b ? 1 : -1);
console.log(numbers);

numbers.sort((a, b) => a - b)
console.log(numbers);

numbers.sort((a, b) => b - a)
console.log(numbers);

//map() 새 배열을 만들어줘서 원본배열을 건드리지 않음
console.log(members.map((x) => x))
console.log(members.map((x) => `name=${x}`))

console.log(members.map((x) => {
    if (x === 'member3') {
        return `member=${x}`
    } else {
        return x;
    }
    ;
}))
console.log(members)

//filter() 원본배열 건드리지않음
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter(n => true))
console.log(numbers.filter(n => false))
console.log(numbers.filter(n => n % 2 === 0))

//find() 가장 첫번째로 찾은 값만 리턴
console.log(numbers.find(x => x % 2 === 0))

//findIndex() 첫번째로 찾은 값 인덱스 반환
console.log(numbers.findIndex(x => x % 2 === 0))

//reduce()
console.log(numbers.reduce((p, n) => p + n, 0))