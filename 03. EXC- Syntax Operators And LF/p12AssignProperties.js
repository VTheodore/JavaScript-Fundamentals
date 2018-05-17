function assignProperties(input) {
    let obj = {}

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0){
            obj[input[i]] = input[i + 1]
        }
    }

    console.log(obj);
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male'])