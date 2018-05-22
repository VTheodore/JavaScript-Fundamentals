function calculateAndManipulateDiagonal(arr) {
    let matrix = []

    for (let row = 0; row < arr.length; row++) {
        let col = arr[row].split(' ').map(Number)
        matrix[row] = col
    }

    let primaryDiagonal = 0;
    let secondaryDiagonal = 0
    
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col){
                primaryDiagonal += matrix[row][col]
            } 
            
            if (col === matrix[row].length - row - 1){
                secondaryDiagonal += matrix[row][col]
            }
        }
    }

    if (primaryDiagonal === secondaryDiagonal){
        matrix = getManipulatedMatrix(matrix, primaryDiagonal)
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '))
    }

    function getManipulatedMatrix(matrix, sum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row !== col && col !== matrix[row].length - 1 - row){
                    matrix[row][col] = sum
                }
            }
        }

        return matrix
    }
}

calculateAndManipulateDiagonal
(
    ['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)

calculateAndManipulateDiagonal
(
    ['1 1 1',
    '1 1 1',
    '1 1 0']
)
