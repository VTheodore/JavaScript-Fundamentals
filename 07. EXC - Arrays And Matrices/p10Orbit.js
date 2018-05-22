function getOrbitMatrix(arr) {
    let matrix = []
    let rows = arr[0]
    let cols = arr[1]
    let point = {x: arr[2], y: arr[3]}

    for (let row = 0; row < arr[0]; row++) {
        matrix[row] = []
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(point.x - row), Math.abs(point.y - col)) + 1
        }
    }

    for (let row of matrix) {
        console.log(row.join(' '))
    }
}

getOrbitMatrix([4, 4, 0, 0])
console.log()
getOrbitMatrix([5, 5, 2, 2])
console.log()
getOrbitMatrix([3, 3, 2, 2])