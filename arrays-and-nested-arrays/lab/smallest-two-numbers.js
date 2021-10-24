function smallestTwo(numbers) {
    let smallest = numbers[0];

    for (let i of numbers) {
        if (i < smallest) {
            smallest = i;
        }
    }

    numbers.splice(numbers.indexOf(smallest), 1);
    let secondSmallest = numbers[0];
    
    for (let j of numbers) {       
        if (j < secondSmallest) {
            secondSmallest = j;
        }
    }
    console.log(smallest, secondSmallest)
}