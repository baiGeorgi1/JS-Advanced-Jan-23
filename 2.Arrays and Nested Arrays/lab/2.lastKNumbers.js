function lastKNums(length, k) {

    const result = [1];

    for (let i = 1; i < length; i++) {
        let sum = 0;
        const index = Math.max(result.length - k, 0);
        const tempArr = result.slice(index);
        for (const el of tempArr) {
            sum += el;
        }
        result.push(sum);
    }
    return (result);
}
console.log(lastKNums(6, 3));
console.log(lastKNums(8, 2));
