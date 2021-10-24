function townPopulation(data) {
    const result = {};

    for (let town of data) {
        const tokens = town.split(' <-> ');
        const name = tokens[0];
        let pop = Number(tokens[1]);

        if (result[name]) {
            pop += result[name];
        }
        result[name] = pop;
        
    }
    for (const [name, pop] of Object.entries(result)) {
        console.log(`${name} : ${pop}`)
    }
}