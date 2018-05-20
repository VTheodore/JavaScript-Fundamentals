function getBiggestElement(matrix) {
    let biggestNum = Number.NEGATIVE_INFINITY
    matrix.forEach(arr => arr.forEach(num => biggestNum = Math.max(biggestNum, num)))

    return biggestNum
}

console.log(getBiggestElement([[20, 40], [10, 60]]))
console.log(getBiggestElement([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]))