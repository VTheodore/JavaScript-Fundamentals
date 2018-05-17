function aggregateElements(input) {
    let sum = aggregate(0, (a, b) => a + b)
    let inverseSum = aggregate(0, (a, b) => a + 1/b)
    let concat = aggregate('', (a, b) => a + b)

    function aggregate(defaultValue, arrow) {
        let res = defaultValue
        for (let i = 0; i < input.length; i++) {
            res = arrow(res, input[i])
        }

        console.log(res)
    }
}


aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])