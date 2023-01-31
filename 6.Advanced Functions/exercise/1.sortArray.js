function sortArr(arr, comm) {
    const sortedArr = arr.sort((a, b) =>
        comm == 'asc' ? a - b : b - a);
    return sortedArr;
}
sortArr([14, 7, 17, 6, 8], 'asc')
sortArr([14, 7, 17, 6, 8], 'desc')
