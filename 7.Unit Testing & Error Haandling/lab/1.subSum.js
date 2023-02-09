function subSum(inputArr, start, end) {
    if (!Array.isArray(inputArr)) {
        return NaN;
    }
    const startIndex = Math.max(start, 0);
    const endIdex = Math.min(end, inputArr.length - 1);

    let subsArr = inputArr.slice(startIndex, endIdex + 1)
    let sum = subsArr.reduce((a, x) => a + Number(x), 0);

    return sum;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));