function heroesInventory(data) {
    let result = [];

    for (let string of data) {
        let [name, level, items] = string.split(' / ');

        level = Number(level);
        items = items ? items.split(', ') : [];
        result.push({name, level, items});
    }
    return JSON.stringify(result);
}

console.log(heroesInventory(['Isaac / 25 / Apple,GravityGun', 'Derek / 12 / BarrelVest,DestructionSword',
'Hes / 1 / ']))