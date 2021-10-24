function magicMatices(matrix) {
    let sumRow = 0;
    let sumCol = 0;
    let magicMatrix = true;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row == 0) {
                sumRow += matrix[row][col];               
            }
            if (col == 0) {
                sumCol += matrix[row][col];
            }
        }
    }
    let tempRow = 0;
    let tempCol = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            tempRow += matrix[row][col];
            if (col < matrix.length) {
                tempCol += matrix[col][row];
            }
        }   

        if (tempRow != sumRow) {
            magicMatrix = false;
        }
        tempRow = 0;

        if (tempCol != sumCol) {
            magicMatrix = false;
        }
        tempCol = 0;
    }
    console.log(magicMatrix);
}       