function getLastDay(input) {
    let day = input[0]
    let month = input[1]
    let year = input[2]

    let lastDayOfPreviousMonth = new Date(year, month - 1, 0).getDate()

    console.log(lastDayOfPreviousMonth);
}

getLastDay([17, 3, 2002])
getLastDay([13, 12, 2004])