function printSequence(n, k) {
    let seq = [1]

    for (let i = 1; i < n; i++) {
        seq[i] = seq.slice(Math.max(0, i - k), i).reduce(function (acc, val) {return acc + val})
    }
    console.log(seq.join(' '))
}

printSequence(6, 3)
printSequence(8, 2)