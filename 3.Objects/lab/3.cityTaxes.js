function cityTaxes(name, population, treasury) {
    const cityObj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() { this.treasury += this.population * this.taxRate },
        applyGrowth(percentage) { this.population += this.population * (percentage / 100) },
        applyRecession(percentage) { this.treasury -= this.treasury * (percentage / 100) },
    }
    return cityObj;
}

// const city = cityTaxes('Tortuga',7000,15000);
// console.log(city);
const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.applyRecession(10);
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);



