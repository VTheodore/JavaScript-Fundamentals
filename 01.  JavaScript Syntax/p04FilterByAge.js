function filterByAge(minAge, nameOfFirst, ageOfFirst, nameOfSecond, ageOfSecond) {
    let personA = {name: nameOfFirst, age: ageOfFirst}
    let personB = {name: nameOfSecond, age: ageOfSecond}

    if (personA.age >= minAge) console.log(personA)
    if (personB.age >= minAge) console.log(personB)
}

filterByAge(12, 'Ivan', 15, 'Asen', 9)