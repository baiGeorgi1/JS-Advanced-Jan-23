function aggregate(array) {
    let sum = 0;
    const arr = array.slice();
    for (const el of arr) {
        sum += el;
    }
    console.log(sum);
    sum = 0;
    for (const el of arr) {
        sum += 1 / el;
    }
    console.log(sum);
    console.log(arr.join(''));

}
aggregate([1, 2, 3]);
aggregate([2, 4, 8, 16]);
