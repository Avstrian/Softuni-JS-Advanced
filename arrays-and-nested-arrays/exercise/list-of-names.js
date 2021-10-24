function listOfNames(names) {
    names.sort((a, b) => a.localeCompare(b));
    let numberAssigned = 1;

    for (let name of names) {
        console.log(`${numberAssigned}.${name}`);
        numberAssigned += 1;
    }
}