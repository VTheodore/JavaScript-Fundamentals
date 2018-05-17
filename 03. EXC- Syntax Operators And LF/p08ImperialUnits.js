function convertToFeetAndInches(inches) {
    let feet = Math.floor(inches / 12)
    let inchesLeft = inches % 12

    console.log(`${feet}'-${inchesLeft}"`)
}

convertToFeetAndInches(36)
convertToFeetAndInches(55)
convertToFeetAndInches(11)