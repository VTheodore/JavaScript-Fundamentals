function getBiggestNum(input) {
    return Math.max(input[0], input[1], input[2])
}

console.log(getBiggestNum([5, -2, 7]))
console.log(getBiggestNum([130, 5, 99]))
console.log(getBiggestNum([43, 43.2, 43.1]))
console.log(getBiggestNum([5, 5, 5]))
console.log(getBiggestNum([-10, -20, -30]))