function printFirstAndLastKElements(arr) {
    let k = arr.shift()

    console.log(arr.slice(0, k).join(' '))
    console.log(arr.slice(arr.length - k).join(' '))
}

printFirstAndLastKElements([2, 7, 8, 9])
printFirstAndLastKElements([3, 6, 7, 8, 9])