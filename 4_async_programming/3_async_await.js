/**
 * async and await
 */

const getPromise = (seconds) => new Promise((res, rej) => {
    setTimeout(() => {
        res('완료')
    }, seconds * 1000)
});

async function ruuner() {
    const result = await getPromise(1);
    console.log(result);
    const result2 = await getPromise(1);
    console.log(result2);
}
ruuner();

// arrow
const arrowRuuner = async () => {
    const result = await getPromise(1);
    console.log(result);
    const result2 = await getPromise(1);
    console.log(result2);
}

arrowRuuner();