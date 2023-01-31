function cityRecord(town, pop, treasury) {
    const townObj = {
        name: town,
        population: pop,
        treasury,
    }
    return townObj;
}
console.log(cityRecord('Tortuga',
    7000,
    15000
));
cityRecord('Santo Domingo',
    12000,
    23500
);
