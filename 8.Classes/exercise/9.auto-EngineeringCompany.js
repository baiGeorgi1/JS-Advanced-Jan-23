function carProduction(arr) {
    const carInfo = {};
    for (const line of arr) {
        let [brand, model, produced] = line.split(' | ');
        produced = Number(produced);
        if (!carInfo[brand]) {
            carInfo[brand] = { [model]: produced };
        } else {
            if (!carInfo[brand][model]) {
                carInfo[brand][model] = produced;
            } else {
                carInfo[brand][model] += produced;
            }
        }
    }
    for (const car in carInfo) {
        console.log(car);
        for (const model in carInfo[car]) {
            console.log(`###${model} -> ${carInfo[car][model]}`);
        }
    }
}
carProduction(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);