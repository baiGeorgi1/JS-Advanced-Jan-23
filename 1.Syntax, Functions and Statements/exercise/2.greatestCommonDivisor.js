function commonDivisor(first, second) {
    while (second) {
        let temp = second;
        second = first % second;
        first = temp;
    }
    console.log(first);
}
//commonDivisor(15, 5);
commonDivisor(2154, 458);
