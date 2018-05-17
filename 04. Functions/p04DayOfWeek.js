function getDayOfWeek(day) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    
    if (days.includes(day)){
        return days.indexOf(day) + 1
    }else {
        return 'error'
    }
}

console.log(getDayOfWeek('Monday'))
console.log(getDayOfWeek('Friday'))
console.log(getDayOfWeek('Frabjoyousday'))
