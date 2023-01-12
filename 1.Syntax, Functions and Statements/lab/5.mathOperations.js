function math(num1, num2, operator) {
    let sum = 0;
    const operators = {
        '+': sum = num1 + num2,
        '-': sum = num1 - num2,
        '*': sum = num1 * num2,
        '/': sum = num1 / num2,
        '%': sum = num1 % num2,
        '**': sum = num1 ** num2
    }
    console.log(operators[operator]);
}
math(5, 6, '+');
math(3, 5.5, '*');