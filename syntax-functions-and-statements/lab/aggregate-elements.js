function aggregateElements(elements) {
    let sumResult = 0;
    let inverseResult = 0;
    let concatResult = '';

    for (i = 0; i < elements.length; i++) {
        sumResult += elements[i];
        inverseResult += 1 / elements[i];
        concatResult += String(elements[i]);
    }

    console.log(sumResult);
    console.log(inverseResult);
    console.log(concatResult);
}
