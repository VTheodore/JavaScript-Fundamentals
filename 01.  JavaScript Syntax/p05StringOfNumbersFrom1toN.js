function getNumbersToN(numAsText) {
    let result = ''
    for (let i = 1; i <= Number(numAsText); i++) {
        result += i
    }

    console.log(result)
}

getNumbersToN('11')