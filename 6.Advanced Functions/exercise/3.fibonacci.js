function getFibonator() {
    let num = 1;
    let current = 0;
    function fib() {
        let fibonnachi = num + current;
        num = current;
        current = fibonnachi;
        return fibonnachi;
    }
    return fib;
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
