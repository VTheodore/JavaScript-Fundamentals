function crystalProcessing(input) {
    let targetThickness = input[0]

    let cut = (num) => num / 4
    let lap = (num) => num * 0.8
    let grind = (num) => num - 20
    let etch = (num) => num - 2
    let xray = (num) => {
        console.log('X-ray x1')
        return ++num
    }

    for (let i = 1; i < input.length; i++) {
        let microns = input[i]
        console.log(`Processing chunk ${microns} microns`)

        microns = executeOperation(targetThickness, microns, 'Cut', cut)
        microns = executeOperation(targetThickness, microns, 'Lap', lap)
        microns = executeOperation(targetThickness, microns, 'Grind', grind)
        microns = executeOperation(targetThickness, microns, 'Etch', etch)

        if (microns + 1 === targetThickness) {
            microns = xray(microns)
        }

        console.log(`Finished crystal ${microns} microns`)
    }

    function executeOperation(targetThickness, size, opName, op) {
        let count = 0

        while (op(size) >= targetThickness || size - targetThickness === 1) {
            size = op(size)
            count++
        }

        if (count > 0) {
            console.log(opName + ' x' + count)

            size = Math.floor(size)
            console.log('Transporting and washing')
        }

        return size
    }
}

crystalProcessing([1375, 50000])
console.log()
crystalProcessing([1000, 4000, 8100])