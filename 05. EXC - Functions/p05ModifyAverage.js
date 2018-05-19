function modifyAverage(num) {
    let averageSumOfDigits = calculateAverageSumOfDigits(Math.abs(num) + '')

    while (averageSumOfDigits <= 5) {
        num = Number(num + '9')

        averageSumOfDigits = calculateAverageSumOfDigits(Math.abs(num) + '')
    }

    console.log(num)

    function calculateAverageSumOfDigits(numAsText) {
        let averageSum = 0

        for (let i = 0; i < numAsText.length; i++) {

            averageSum += Number(numAsText[i])
        }

        return averageSum / numAsText.length
    }
}

modifyAverage(-101)
modifyAverage(5835)