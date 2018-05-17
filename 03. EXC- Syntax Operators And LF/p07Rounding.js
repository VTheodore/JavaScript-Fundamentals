function round(input) {
    let num = input[0]
    let precision = input[1]

    let roundedNum = getRoundedNum(num, precision)

    console.log(roundedNum);


    function getRoundedNum(num, precision) {
        if (precision > 15){
            precision = 15
        }
        
        let roundedNum = num.toFixed(precision).toString()
        roundedNum = parseFloat(roundedNum)

        return roundedNum
    }
}

round([3.1415926535897932384626433832795, 2])
round([10.5, 3])