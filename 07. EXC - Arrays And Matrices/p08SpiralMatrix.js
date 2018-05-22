function fillSpiralMatrix(rows, cols) {
    let matrix = []

    for (let i = 0; i < rows; i++) {
        matrix[i] = []
    }

    let value = 1
    let minCol = 0
    let maxCol = cols - 1
    let minRow = 0
    let maxRow = rows - 1

    while (value <= rows * cols){
        for (let i = minCol; i <= maxCol; i++) {
            matrix[minRow][i] = value
            value++
        }

        for (let i = minRow + 1; i <= maxRow; i++) {
            matrix[i][maxCol] = value
            value++
        }

        for (let i = maxCol - 1; i >= minCol ; i--) {
            matrix[maxRow][i] = value
            value++
        }

        for (let i = maxRow - 1; i >= minRow + 1 ; i--) {
            matrix[i][minCol] = value
            value++
        }

        minCol++
        maxCol--
        minRow++
        maxRow--
    }

    for (let row of matrix) {
        console.log(row.join(' '))
    }
}

fillSpiralMatrix(5, 5)
console.log()
fillSpiralMatrix(3, 3)