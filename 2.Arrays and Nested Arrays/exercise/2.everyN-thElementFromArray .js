function printN(arr, num) {
    //const myArr=[];
    // for (let i = 0; i < arr.length; i+=num) {
    //     myArr.push(arr[i])    
    // }
    // return myArr
    // }
//__________ METOD SOLVED _______
    return arr.filter((_, i) => i % num == 0)
}

console.log(printN(['5', '20', '31', '4', '20'], 2));

printN(['dsa', 'asd', 'test', 'tset'], 2
);
