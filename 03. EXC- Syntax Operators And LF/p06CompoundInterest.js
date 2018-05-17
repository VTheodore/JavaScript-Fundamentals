function calculateCompound(input) {
    let principalSum = input[0]
    let nominalInterestRate = input[1] / 100
    let compoundingFrequency = 12 / input[2]
    let overallLength = input[3]

    let accumulatedValue = principalSum * Math.pow((1 + nominalInterestRate / compoundingFrequency), compoundingFrequency * overallLength)

    console.log(accumulatedValue.toFixed(2));
}

calculateCompound([1500, 4.3, 3, 6])
calculateCompound([100000, 5, 12, 25])