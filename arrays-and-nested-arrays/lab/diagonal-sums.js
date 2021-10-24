function diagonalSums(matrix) {
    let diag1 = 0;
    let diag2 = 0;
    let last = matrix.length - 1;

    for (i = 0; i < matrix.length; i++) {
        diag2 += matrix[i][last - i];
        diag1 += matrix[i][i];
    }

    console.log(diag1, diag2);
}