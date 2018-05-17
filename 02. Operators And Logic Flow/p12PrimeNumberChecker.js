function checkPrime(num) {
    if (num === 1 || num === 0 || num === - 5){
        return false
    }

    for (let i = 2; i < Math.sqrt(Math.abs(num)); i++) {
        if (Math.abs(num) % i === 0){
            return false
        }
    }

    return true
}

console.log(checkPrime(7));
console.log(checkPrime(8));
console.log(checkPrime(81));
console.log(checkPrime(-5))