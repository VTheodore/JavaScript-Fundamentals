function printSquare(n) {
    square(n)

    function square(count = 5) {
        for (let i = 1; i <= count; i++) {
            console.log('* '.repeat(count).trim())
        }
    }
}

printSquare(1)
console.log()
printSquare(2)
console.log()
printSquare(5)
console.log()
printSquare()