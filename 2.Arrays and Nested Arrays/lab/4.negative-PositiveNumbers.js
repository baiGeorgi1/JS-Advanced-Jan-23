function negativePositive(aray) {
    let endArr = [];
    for (let index = 0; index < aray.length; index++) {
        if (aray[index] < 0) {
            endArr.unshift(aray[index]);
        } else {
            endArr.push(aray[index]);
        }
    }
    for (const el of endArr) {
        console.log(el);
    }
}
negativePositive([7, -2, 8, 9]);
negativePositive([3, -2, 0, -1]);
