const createCounter = () => {
    let counter = 0;
    return () => {
        return ++counter;
    }
}
// Создаем счетчик.
const counter1 = createCounter();
console.log('counter1 = ', counter1()); // 1
console.log('counter1 = ', counter1()); // 2
//Создадим еще один счетчик. Каждый будет работать независимо.
const counter2 = createCounter();
console.log('counter2 = ', counter2()); // 1
console.log('counter1 = ', counter1()); // 3



const closureFunction = () => {
    const cache = {};
    return (x) => {
        console.log(cache);
        if (cache[x]) return cache[x];
        const result = x * x;
        cache[x] = result;
        return result;
    }
}

const chachedPow = closureFunction();
chachedPow(2); // 4
chachedPow(8); // 64
chachedPow(2); // 4