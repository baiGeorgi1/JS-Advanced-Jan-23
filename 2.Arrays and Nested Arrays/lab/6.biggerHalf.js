function bigHalf(arr) {
    const myArr = arr
        .sort((a, b) => a - b)
        .splice(arr.length / 2);
    return myArr;
}
bigHalf([4, 7, 2, 5]);
bigHalf([3, 19, 14, 7, 2, 19, 6]);
