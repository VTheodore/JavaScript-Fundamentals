function negativeAndPositiveNumbers(arr) {
    let res = []

    for (let num of arr) {
        num < 0 ? res.unshift(num) : res.push(num)
    }

    console.log(res.join('\n'))
}

negativeAndPositiveNumbers([7, -2, 8, 9])
negativeAndPositiveNumbers([3, -2, 0, -1])