function checkValidity(input) {
    function isValid(inputElement, inputElement2, number, number2) {
        let distanceX = Math.pow(inputElement - number, 2)
        let distanceY = Math.pow(inputElement2 - number2, 2)

        let totalDist = Math.sqrt(distanceX + distanceY)

        if (Number.isInteger(totalDist)) return 'valid'
        else return 'invalid'
    }

    for (let i = 0; i < input.length; i += 2) {
        let validity = isValid(input[i], input[i + 1], 0, 0)

        console.log(`{${input[i]}, ${input[i + 1]}} to {0, 0} is ${validity}`)
    }

    let validity = isValid(input[0], input[1], input[2], input[3])
    console.log(`{${input[0]}, ${input[1]}} to {${input[2]}, ${input[3]}} is ${validity}`)
}

checkValidity([3, 0, 0, 4])
console.log()
checkValidity([2, 1, 1, 1])