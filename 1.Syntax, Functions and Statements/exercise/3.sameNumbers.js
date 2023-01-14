function sameNumbers(input) {
    let stringNum = input.toString();
    let isSame = true;
    let sum = 0;
    for (let i = 0; i < stringNum.length; i++) {
        sum += Number(stringNum[i]);
        if (stringNum[0] !== stringNum[i]) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);