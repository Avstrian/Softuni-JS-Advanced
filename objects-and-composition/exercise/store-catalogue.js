function storeCatalogue(arr) {
    const result = {};

    for (let item of arr) {
        let [name, price] = item.split(' : ');
        price = Number(price);
        let letter = name[0];

        if (!result[letter]) {
            result[letter] = {};
        }
        result[letter][name] = price;
    }
    const sortedKeys = Object.keys(result).sort((a, b) => a.localeCompare(b));

    for (let el of sortedKeys) {
        console.log(el);
        for (let [key, product] of Object.entries(result)) {
            if (key == el) {
                const sortAlpha = [];
                for (let [item, price] of Object.entries(product)) {
                    sortAlpha.push(`${item}: ${price}`);
                }
                sortAlpha.sort((a, b) => a.localeCompare(b));

                for (let input of sortAlpha) {
                    console.log(`  ${input}`)
                }
            }
        }
    }
}