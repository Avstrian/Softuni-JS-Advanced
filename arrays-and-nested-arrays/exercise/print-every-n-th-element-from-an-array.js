function nthElements(strings, number) {
    const newStrings = [];
        
    for (step = 0; step < strings.length; step+=number) {
        newStrings.push(strings[step]);
    }
    return newStrings;
}
