function multiplicationTable(n) {
    let code = '<table border="1">\n'

    code += '<tr><th>x</th>'

    for (let i = 1; i <= n; i++) {
        code += `<th>${i}</th>`
    }

    code += '</tr>\n'

    for (let i = 1; i <= n; i++) {
        code += `  <tr><th>${i}</th>`

        for (let j = 1; j <= n; j++) {
            code += `<td>${i * j}</td>`
        }

        code += '</tr>\n'
    }

    code += '</table>'

    console.log(code);
}

multiplicationTable(5)