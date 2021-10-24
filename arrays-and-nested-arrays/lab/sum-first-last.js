function sumFirstLast(numbers) {
    
    if (numbers.length == 1) {
        return Number(numbers[0]);
    }
    const first = Number(numbers.shift());
    const last = Number(numbers.pop());

    return first + last;
}