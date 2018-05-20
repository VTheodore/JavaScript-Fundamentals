function getDiagonalSum(matrix) {
    let primaryDiagonal = 0
    let secondaryDiagonal = 0

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col){
                primaryDiagonal += matrix[row][col]
            }
            
            if (col === matrix[row].length - 1 - row){
                secondaryDiagonal += matrix[row][col]
            }
        }
    }

    console.log(primaryDiagonal + ' ' + secondaryDiagonal)
}

getDiagonalSum([[20, 40], [10, 60]])
getDiagonalSum([[3, 5, 17], [-1, 7, 14], [1, -8, 89]])