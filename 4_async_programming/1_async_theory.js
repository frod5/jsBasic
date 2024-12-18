/**
 * async theory
 * JS - 싱글 스레드 사용.
 */

// 동기 start
function longWork() {
    const now = new Date();
    const miliseconds = now.getTime();
    const afterTwoSeconds = miliseconds + 2 * 1000;

    while (new Date().getTime() < afterTwoSeconds) {

    }

    console.log("완료")
}

// console.log('hello');
// longWork();
// console.log('world');

// 동기 end

// 비동기 start
function longWork() {
    //비동기로 실행됌.
    setTimeout(() => {
        console.log('완료')
    }, 2000);
}

console.log('hello');
longWork();
console.log('world');
// 비동기 end

/**
 * 비동기 작동 순서
 * 1) 비동기 함수도 call stack 적재
 * 2) event loop로 인해 call stack -> task Queue (event Queue)로 이동
 * 3) call stack을 확인하고 event loop가 비동기 함수를 다시 call stack에 적재
 */