function increasingSubset(arr) {
    // -----------exerciseSolve---------
    let bigNum = arr.shift();
    const result = [bigNum];
    for (const number of arr) {
        if (number >= bigNum) {
            result.push(number);
            bigNum = number
        }
    }
    return result;
    // ------------mySolve---------
    // const myArr = [];
    // let last = 0;
    // for (const el of arr) {
    //     if (!myArr.length) {
    //         myArr.push(el);
    //         last = el
    //     } else {
    //         if (el >= last) {
    //             myArr.push(el);
    //             last = el;
    //         }
    //     }   
    // }
    // return (myArr);
}

console.log(increasingSubset([20,
    3,
    2,
    15,
    6,
    1]
));