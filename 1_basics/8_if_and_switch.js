/**
 * if and Switch
 */
let number = 5;

if(number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

if(number % 3 === 0) {
    console.log("3의 배수")
} else if(number % 4 === 0) {
    console.log("4의 배수")
} else {
    console.log("3,4의 배수가 아님")
}

const englishDay = 'monday';
let koreanDay;

switch (englishDay) {
    case 'monday': koreanDay = '월'; break;
    case 'tuesday': koreanDay = '화'; break;
    default: break;
}

console.log(koreanDay);