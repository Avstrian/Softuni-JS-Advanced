function sumJuices(juicesArray) {
    let juices = new Map();
    let juiceBottles = new Map();
    
    for (let juice of juicesArray) {
        let [type, qty] = juice.split(' => ');

        if (juices.has(type)) {
            qty = Number(qty) + Number(juices.get(type));
        }
        juices.set(type, qty);

        if (Number(juices.get(type) >= 1000)) {
            let newQty = Number(juices.get(type)) / 1000;
            juiceBottles.set(type, newQty);
        }

    }

    for (let [key, value] of juiceBottles.entries()) {
        console.log(`${key} => ${Math.floor(value)}`)
    }

}
