function roadRadar(input) {
    let speed = input[0]
    let zone = input[1]

    let limit = getLimit(zone)

    let infraction = getInfraction(speed, limit)

    if (infraction) {
        console.log(infraction)
    }

    function getInfraction(speed, limit) {
        let speedExcess = speed - limit

        if (speedExcess <= 0) {
            return false
        } else if (speedExcess <= 20) {
            return 'speeding'
        } else if (speedExcess <= 40) {
            return 'excessive speeding'
        } else {
            return 'reckless driving'
        }
    }

    function getLimit(zone) {
        switch (zone) {
            case "motorway":
                return 130
            case "interstate":
                return 90
            case "city":
                return 50
            case "residential":
                return 20
        }
    }
}

roadRadar([40, 'city'])
roadRadar([21, 'residential'])
roadRadar([120, 'interstate'])
roadRadar([200, 'motorway'])