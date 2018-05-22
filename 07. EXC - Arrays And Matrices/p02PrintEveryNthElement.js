function printEveryNthElement(array) {
    let step = array.pop()

    for (let i = 0; i < array.length; i += Number(step)) {
        console.log(array[i])
    }
}

printEveryNthElement([5, 20, 31, 4, 20, 2])
console.log()
printEveryNthElement(['dsa', 'asd', 'test', 'tset', 2])
console.log()
printEveryNthElement([1, 2, 3, 4, 5, 6])