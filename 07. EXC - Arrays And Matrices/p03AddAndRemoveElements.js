function addAndRemoveElements(inputArr) {
    let array = []

    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === 'add'){
            array[i] = i + 1
        } else if (inputArr[i] === 'remove'){
            array.pop()
        }
        
    }

    if (array.length > 0){
        console.log(array.filter(w => w != '').join('\n'))
    } else {
        console.log("Empty")
    }
}

addAndRemoveElements(['add', 'add', 'add', 'add'])
console.log()
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add'])
console.log()
addAndRemoveElements(['remove', 'remove', 'remove'])