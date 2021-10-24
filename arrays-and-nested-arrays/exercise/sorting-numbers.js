function sortingNumbers(numbers) {
    numbers.sort((a, b) => a - b);
    const newNumbers = [];

    while (numbers.length > 0) {
        newNumbers.push(numbers.shift());
        newNumbers.push(numbers.pop())
    }
    return newNumbers;
}