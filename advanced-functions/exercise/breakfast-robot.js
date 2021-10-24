function breakfastRobot() {
    const recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
    }

    const microElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    function restock(element, qty) {
        microElements[element] += qty;
        return `Success`;
    }

    function prepare(recipe, qty) {
        const remainingStorage = {};

        for (const element in recipes[recipe]) {
            const remaining = microElements[element] - recipes[recipe][element] * qty;
            if (remaining < 0) {
                return `Error: not enough ${element} in stock`;
            }
            else {
                remainingStorage[element] = remaining;
            }
        }
        Object.assign(microElements, remainingStorage);
        return `Success`;
    }
    
    function report() {
        return `protein=${microElements['protein']} carbohydrate=${microElements['carbohydrate']} fat=${microElements['fat']} flavour=${microElements['flavour']}`;
    }

    function interpretor(str) {
        const [command, item, quantity] = str.split(' ');

        switch(command) {
            case "restock":
                return restock(item, Number(quantity));
            case "prepare":
                return prepare(item, Number(quantity));
            case "report":
                return report();
        }
    }
    return interpretor;
}
