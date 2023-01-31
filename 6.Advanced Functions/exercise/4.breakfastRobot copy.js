function solution() {
    const library = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };
    const inStorage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,

    }
    function manager(string) {
        const [command, ingredient, quantity] = string.split(' ');
        if (command == 'report') {
            const recipe = [];
            for (const key in inStorage) {
                let item = `${key}=${inStorage[key]}`;
                recipe.push(item);
            }
            return recipe.join(' ');

        } else if (command == 'restock') {
            inStorage[ingredient] += Number(quantity);
            return 'Success';


        } else if (command == 'prepare') {
            const itemList = Object.entries(library[ingredient]);
            for (const line of itemList) {
                let [name, available] = line;
                if (inStorage[name] < Number(available) * +quantity) {
                    return `Error: not enough ${name} in stock`;
                }
            }
            for (const line of itemList) {
                let [name, available] = line;
                if (inStorage.hasOwnProperty(name)) {
                    inStorage[name] -= Number(available) * +quantity;

                }
            }
            return 'Success';
        }
    }
    return manager;
}
let manager = solution();
console.log(manager('prepare turkey 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare turkey 2'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare burger 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager("report"));












