function twoSmallest(arr) {
    let myArr = arr
        .sort((a, b) => a - b)
        .splice(0, 2);
    return myArr;
}
twoSmallest([30, 15, 50, 5]);
twoSmallest([3, 0, 10, 4, 7, 3]);
