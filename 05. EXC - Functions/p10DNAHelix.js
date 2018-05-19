function printDNA(n) {
    //AT CG TT AG GG
    let symbols = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G']
    let counter = 0

    for (let i = 0; i < n; i++) {
        if (counter === symbols.length) counter = 0

        if (i % 4 === 0) {
            printTopLine(symbols[counter], symbols[counter + 1])
        } else if (i % 2 === 0) {
            printMiddleLine(symbols[counter], symbols[counter + 1])
        } else {
            printFillingLine(symbols[counter], symbols[counter + 1])
        }

        counter += 2
    }


    function printTopLine(a, b) {
        console.log(`**${a}${b}**`)
    }

    function printFillingLine(a, b) {
        console.log(`*${a}--${b}*`)
    }

    function printMiddleLine(a, b) {
        console.log(`${a}----${b}`)
    }

}

printDNA(4)
console.log()
printDNA(10)
console.log()
printDNA(123)