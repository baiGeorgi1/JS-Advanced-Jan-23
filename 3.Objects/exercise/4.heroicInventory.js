function heroicInventory(arr) {
    let register = [];
    for (const line of arr) {
        let [name, level, items] = line.split(' / ');
        const obj = {
            name,
            level: Number(level),
            // we MUST to check if the item is one
            items: items ? items.split(', ') : [],
        }
        register.push(obj);
    }
    return JSON.stringify(register);
}
heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);
console.log(heroicInventory(['Jake / 1000 /']));
