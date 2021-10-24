function biggestElement(matrix) {
    let result = matrix[0][0];

    for (let row of matrix) {
        for (let col of row) {
            if (col > result) {
                result = col;
            }
        }
    }

    return result;
}