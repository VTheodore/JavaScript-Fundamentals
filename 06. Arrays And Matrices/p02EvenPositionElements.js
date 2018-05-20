function getEvenPositionElements(arr) {
    return arr.filter((n, i) => i % 2 === 0).join(' ')
}

console.log(getEvenPositionElements(['20', '30', '40']))
console.log(getEvenPositionElements(['5', '10']))