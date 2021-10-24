function equalNeighbours(matrix) {
    let neighbours = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            if (matrix[row][col] === matrix[row][col-1]) {
                neighbours += 1;
            }
            if (matrix[row][col] === matrix[row][col + 1]) {
                neighbours += 1;
            }
            
            if (row > 0) {
                if (matrix[row][col] === matrix[row - 1][col]) {
                    neighbours += 1;
                }
            }

            if (row < matrix.length - 1){
                if (matrix[row][col] === matrix[row + 1][col]){
                    neighbours += 1;
                }
            }

            matrix[row][col] = null;
        }   
    }

    return neighbours;
}