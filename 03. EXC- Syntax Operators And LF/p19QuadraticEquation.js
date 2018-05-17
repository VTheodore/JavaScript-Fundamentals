function calcQuadraticEquation(a, b, c) {
    let discriminant = Math.pow(b, 2) - 4 * a * c

    if (discriminant === 0) {
        let x = -b / (2 * a)
        return x
    } else if (discriminant < 0) {
        return 'No'
    } else {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a)
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a)

        return Math.min(x1, x2) + '\n' + Math.max(x1, x2)
    }
}

console.log(calcQuadraticEquation(6, 11, -35))
console.log(calcQuadraticEquation(1, -12, 36))
console.log(calcQuadraticEquation(5, 2, 1))