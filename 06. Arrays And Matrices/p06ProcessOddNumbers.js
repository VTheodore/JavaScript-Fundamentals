function processOddNumbers(arr) {
    console.log(arr.filter((n, i) => i % 2 !== 0).map(n => n * 2).reverse().join(' '))
}

processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])