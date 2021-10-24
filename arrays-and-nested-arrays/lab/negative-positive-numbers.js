function negativeToPositive(numbers) {
    const sortedNumbers = [];
    for (let num of numbers) {
        if (num < 0) {
            sortedNumbers.unshift(num);
        }
        else {
            sortedNumbers.push(num);
        }
    }
    console.log(sortedNumbers.join('\n'))
}

