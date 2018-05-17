function calculate(a, b, op) {
    let add = function (num1, num2) {return num1 + num2}
    let subtract = function (num1, num2) {return num1 - num2}
    let divide = function (num1, num2) {return num1 / num2}
    let multiply = function (num1, num2) {return num1 * num2}

    switch (op){
        case '+': return add(a, b)
        case '-': return subtract(a, b)
        case '/': return divide(a, b)
        case '*': return multiply(a, b)
    }
}

console.log(calculate(2, 4, '+'))
console.log(calculate(3, 3, '/'))
console.log(calculate(18, -1, '*'))