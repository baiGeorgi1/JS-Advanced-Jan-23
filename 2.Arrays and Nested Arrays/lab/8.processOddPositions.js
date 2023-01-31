function oddPoss(arr) {
    const myArr = arr
        .filter((a, i) => i % 2 != 0)
        .map(a => a * 2)
        .reverse();
    return myArr.join(' ')
}
oddPoss([10, 15, 20, 25]);

oddPoss([3, 0, 10, 4, 7, 3]);
