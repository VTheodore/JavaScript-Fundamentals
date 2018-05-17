function drawFigure(n) {
    drawMainPart(n)
    drawOffsetPart(n)
    drawMainPart(n)
    drawOffsetPart(n)
    drawMainPart(n)

    function drawMainPart(n) {
        let line = '+'
        line += '-'.repeat(n - 2)
        line += '+'
        line += '-'.repeat(n - 2)
        line += '+'

        console.log(line);
    }

    function drawOffsetPart(n) {
        let line = ''

        if (n % 2 === 1) {
            for (let i = 0; i < (n - 3) / 2; i++) {
                line = '|' + ' '.repeat(n - 2) + '|' + ' '.repeat(n - 2) + '|'
                console.log(line);
            }
        } else if (n % 2 === 0) {
            for (let i = 0; i < (n - 4) / 2; i++) {
                line = '|' + ' '.repeat(n - 2) + '|' + ' '.repeat(n - 2) + '|'
                console.log(line);
            }
        }
    }
}

drawFigure(2)
console.log()
drawFigure(3)
console.log()
drawFigure(4)
console.log()
drawFigure(5)
console.log()
drawFigure(6)
console.log()
drawFigure(7)
console.log()
drawFigure(200)