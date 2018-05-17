function isLeapYear(year) {
    let isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "yes" : "no"
    console.log(isLeap);
}

isLeapYear(1999)
isLeapYear(2000)
isLeapYear(1900)