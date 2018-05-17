function generateChessboard(n) {
    let code = '<div class="chessboard">\n'

    for (let i = 1; i <= n; i++) {
        code += '  <div>\n'
        for (let j = i; j < i + n; j++) {
            let color = j % 2 === 0 ? "white" : "black"

            code += `    <span class="${color}"></span>\n`
        }
        code += '  </div>\n'
    }

    code += '</div>'

    return code
}

console.log(generateChessboard(3));