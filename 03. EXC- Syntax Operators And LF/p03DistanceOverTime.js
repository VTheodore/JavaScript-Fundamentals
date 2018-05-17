function getDistanceOverTime(input) {
    let v1 = input[0] //Speed in km/h
    let v2 = input[1] //Speed in km/h
    let t = input[2] //time in seconds

    t /= 3600 //Time in h

    let dist1 = v1 * t * 1000 //Distance in m
    let dist2 = v2 * t * 1000 //Distance in m

    let delta = Math.abs(dist1 - dist2)

    console.log(delta);
}

getDistanceOverTime([0, 60, 3600])
getDistanceOverTime([11, 10, 120])
getDistanceOverTime([5, -5, 40])