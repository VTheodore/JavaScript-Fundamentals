function printTriangle(n) {
    for (let i = 1; i <= n; i++)printStars(i)
    for (let i = n - 1; i > 0; i--)printStars(i)

    function printStars(count) {
        console.log('*'.repeat(count))
    }
}


printTriangle(1)
console.log()
printTriangle(2)
console.log()
printTriangle(5)
console.log()