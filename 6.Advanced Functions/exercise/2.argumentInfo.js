function info() {
    const arr = Array.from(arguments);
    const counter = {};
    arr.forEach(element => {
        console.log(`${typeof element}: ${element}`);
        if (!counter.hasOwnProperty(typeof element)) {
            counter[typeof element] = 0;
        }
        counter[typeof element] += 1;
    });
    const tokens = Object.entries(counter);
    const sorted = tokens.sort((a, b) => b[1] - a[1]);
    for (const item of sorted) {
        console.log(`${item[0]} = ${item[1]}`);
    }
}
info({ bob: 2 }, 'cat', 42, function () { console.log('Hello world!'); }, 'hello')