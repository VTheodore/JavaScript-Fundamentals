function getCountOfEqualNeighbours(matrix) {
    let count = 0

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            try{
                if (matrix[row][col] === matrix[row][col + 1]){
                    count++
                }

                if (matrix[row][col] === matrix[row + 1][col]){
                    count++
                }
            }catch (e) {

            }
        }
    }

    return count
}

console.log(getCountOfEqualNeighbours(
    [['2', '3', '4', '7', '0'],
        ['4', '0', '5', '3', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '4']]
))
console.log(getCountOfEqualNeighbours(
    [['test', 'yes', 'yo', 'ho'],
        ['well', 'done', 'yo', '6'],
        ['not', 'done', 'yet', '5']]
))

console.log(getCountOfEqualNeighbours(
    [[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]
))