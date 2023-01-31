function magicMatrix(matrix) {
    let rowSum = 0;
    let columnSum = 0;
    for (line of matrix) {
        for (let row = 0; row < line.length; row++) {
            rowSum += line[row];
            columnSum += line[0]
        }
    }
    if (rowSum == columnSum) {
        return true;
    } else {
        return false;
    }
}
console.log(magicMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));
console.log(magicMatrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
));
