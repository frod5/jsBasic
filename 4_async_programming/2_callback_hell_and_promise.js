/**
 * Callback
 */
function waitAndRun() {
    //첫번쨰 파라미터가 콜백함수
    setTimeout(() => console.log('끝'), 2000)
}

// waitAndRun();

function waitAndRun2() {
    setTimeout(() => {
        console.log('1번 콜백 끝');
        setTimeout(() => {
            console.log('2번 콜백 끝')
            setTimeout(() => {
                console.log('3번 콜백 끝')
            }, 2000)
        }, 2000)
    }, 2000)
}

// waitAndRun2();

/**
 * Promise (비동기)
 */

const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료')
    }, 2000);
})

//resolve() 함수 실행시 then이 호출되면서 resolve 값을 받는다.
// timeoutPromise.then((res) => {
//     console.log(res)
// })

const getPromise = (seconds) => new Promise((res, rej) => {
    setTimeout(() => {
        res('완료')
        // rej("error")
    }, seconds * 1000)
})

// getPromise(1).then((res) => {
//     console.log('first then')
//     console.log(res)
// }).catch((err) => {
//     console.log('first catch')
//     console.log(err)
// }).finally(()=>{
//     console.log('finally')
// })

Promise.all([
    getPromise(1),
    getPromise(2),
    getPromise(1),
]).then(
    (res) => console.log(res)
).catch(console.error)


