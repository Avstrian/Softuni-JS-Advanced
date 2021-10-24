function extractIncreasingSequance(sequence) {
    const increasingSequence = [];
    let highestElement;

    for (let el of sequence) {
        if (el >= highestElement || highestElement == undefined) {
            highestElement = el;
            increasingSequence.push(highestElement);
        }
    }
    return increasingSequence;
}