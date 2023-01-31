function sorting(arr) {
    arr = arr.sort((a, b) => a - b);
    let final = [];
    while (arr.length) {
        final.push(arr.shift(), arr.pop())
    }
    return final
}
console.log(sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));