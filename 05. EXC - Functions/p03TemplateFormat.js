function templateFormat(input) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n'

    for (let i = 0; i < input.length; i += 2) {
        let question = input[i]
        let answer = input[i + 1]

        let code = generateXML(question, answer, i)

        xml += code
    }

    xml += '</quiz>'

    console.log(xml)


    function generateXML(question, answer) {
        let code = '  <question>\n'
        code += '    ' + question + '\n  </question>\n'

        code += '  <answer>\n'
        code += '    ' + answer + '\n  </answer>\n'

        return code

    }
}

templateFormat(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"])
console.log()
templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"])