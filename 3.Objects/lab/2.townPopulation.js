function townPop(listArr) {
    const towns = {};
    for (const line of listArr) {
        let [city, population] = line.split(' <-> ');
        if (!towns.hasOwnProperty(city)) {
            towns[city] = Number(population);
        } else {
            towns[city] += Number(population);
        }
    }
    for (const key in towns) {
        console.log(`${key} : ${towns[key]}`);
    }
}
townPop(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);
townPop(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);
