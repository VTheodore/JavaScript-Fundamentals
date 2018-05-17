function composeTag(input) {
    let name = input[0]
    let alternateText = input[1]

    console.log(`<img src="${name}" alt="${alternateText}">`)
}

composeTag(['smiley.gif', 'Smiley Face'])