'use strict'
function circleArea(input) {
    const radius = input;
    let result = 0;
    if (typeof radius == 'number' && radius>0) {
        result = Number(Math.pow(radius,2) * Math.PI);
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
    }
}
circleArea(5)
circleArea(null)