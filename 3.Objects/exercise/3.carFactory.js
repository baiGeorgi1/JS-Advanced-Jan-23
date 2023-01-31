function carFactory(obj) {
    let [model, power, color, type, wheelsize] = Object.values(obj);
    const engines = {
        small: {
            power: 90,
            volume: 1800
        },
        normal: {
            power: 120,
            volume: 2400
        },
        monster: {
            power: 200,
            volume: 3500
        },
    }
    const engine = {};
    if (power <= 90) {
        engine = engines.small;
    } else if (power <= 120) {
        engine = engines.normal;
    } else if (power >= 200) {
        engine = engines.monster;
    }
    const carriage = {
        type,
        color
    }
    let size = wheelsize % 2 == 0 ? wheelsize - 1 : wheelsize;
    let wheels = Array(4).fill(size);
    const clientCar = {
        model,
        engine,
        carriage,
        wheels
    }
    return clientCar;
}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
);
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
);
