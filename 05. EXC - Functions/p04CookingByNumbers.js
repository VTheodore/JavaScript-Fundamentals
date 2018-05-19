function cookingByNumbers(input) {
    let num = input[0]

    for (let i = 1; i < input.length; i++) {
        let command = input[i]

        num = cookNumber(command, num)
        console.log(num);
    }

    function cookNumber(command, num) {
        switch (command) {
            case "chop":
                return num / 2
            case "dice":
                return Math.sqrt(num)
            case "spice":
                return num + 1
            case "bake":
                return num * 3
            case "fillet":
                return num * 0.8
        }
    }
}

cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop'])
console.log()
cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet'])