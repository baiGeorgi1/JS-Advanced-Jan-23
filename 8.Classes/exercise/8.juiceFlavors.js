function printBottles(arr) {
    const juiceFlavor = {};
    const juiceBottles = {};
    for (const line of arr) {
        let [kind, quantity] = line.split(' => ');
        quantity = Number(quantity);
        if (!juiceFlavor[kind]) {
            juiceFlavor[kind] = 0;
        }
        juiceFlavor[kind] += quantity % 1000;
        if (quantity >= 1000) {
            if (!juiceBottles[kind]) {
                juiceBottles[kind] = 0;
            }
            juiceBottles[kind] += Math.trunc(quantity / 1000);
        }
        if (juiceFlavor[kind] >= 1000) {
            if (!juiceBottles[kind]) {
                juiceBottles[kind] = 0;
            }
            juiceBottles[kind] += Math.floor(juiceFlavor[kind] / 1000);
            juiceFlavor[kind] = juiceFlavor[kind] % 1000;
        }
    }
    result = '';
    Object.keys(juiceBottles).forEach(x => {
        result += (`${x} => ${juiceBottles[x]}\n`);
    });
    return result;
}




console.log(printBottles
    (['Orange => 2000',
        'Peach => 1400',
        'Banana => 450',
        'Banana => 450',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549']));
console.log('-------------------------');
// console.log(printBottles
//     (['Kiwi => 234',
//         'Pear => 2345',
//         'Watermelon => 3456',
//         'Kiwi => 4567',
//         'Pear => 5678',
//         'Watermelon => 6789',
//         'Watermelon => 754'
//     ]));

