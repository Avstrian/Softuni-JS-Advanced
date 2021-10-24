function lastNumsSequence(n, k) {
    let first = 1;
    const result = [];
    result.push(first);

    for (let j = 0; j < n - 1; j++) {
        let accumulatingNum = 0;

        for (let i = result.length; i > result.length - k; i--) {
            if (i - 1 >= 0) {
                accumulatingNum += result[i - 1];
            }  
        }

        result.push(accumulatingNum);
    }

    return result;
}
