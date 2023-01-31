function calculator() {
    let firstDigit;
    let secondDigit;
    let finalSum;
    return {
        init: (first, second, endRes) => {
            firstDigit = document.querySelector(first);
            secondDigit = document.querySelector(second);
            finalSum = document.querySelector(endRes);
        },
        add: () => {
            finalSum.value = +firstDigit.value + +secondDigit.value;
        },
        subtract: () => {
            finalSum.value = +firstDigit.value - +secondDigit.value;
        }
    }
}


const calculate = calculator();
calculate.init('#num1', '#num2', '#result');


