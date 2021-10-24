function biggerHalf(numbers) {
    numbers.sort((a, b) => a - b);
    numbers.splice(0, Math.floor(numbers.length / 2));
    return numbers;
}