function generateCode(n) {
    let code = '<ul>\n'

    for (let i = 1; i <= n; i++) {
        let color = i % 2 === 0 ? "blue" : "green"

        code += `  <li><span style='color:'${color}'>${i}</span></li>\n`
    }
    code += '</ul>'

    return code
}

console.log(generateCode(10));