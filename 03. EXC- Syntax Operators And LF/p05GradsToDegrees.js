function printDegrees(grads) {
    grads %= 400

    let degrees = grads * 0.9
    let degreeOutput = degrees > 0 ? degrees : 360 + degrees

    console.log(degreeOutput);
}

printDegrees(100)
printDegrees(400)
printDegrees(850)
printDegrees(-50)