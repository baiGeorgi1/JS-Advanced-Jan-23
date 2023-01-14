function numberCooking(first, ...list) {
    let number = Number(first);
    for (const command of list) {
        switch (command) {
            case 'chop':
                number /= 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number += 1;
                console.log(number);
                break;
            case 'bake':
                number *= 3;
                console.log(number);
                break;
            case 'fillet':
                number *= 0.8;
                console.log(number.toFixed(1));
                break;
        }
    }
}
numberCooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
numberCooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

