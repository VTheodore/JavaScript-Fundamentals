function extractNonDecreasingSubsequence(arr) {
    let biggest = Number.NEGATIVE_INFINITY

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= biggest){
            biggest = arr[i]
            console.log(biggest)
        }
    }
}

extractNonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24])
console.log()
extractNonDecreasingSubsequence([1, 2, 3, 4])
console.log()
extractNonDecreasingSubsequence([20, 3, 2, 15, 6, 1])