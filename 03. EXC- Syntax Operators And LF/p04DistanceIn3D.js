function printDistance(input) {
    let pointA = {x: input[0], y: input[1], z: input[2]}
    let pointB = {x: input[3], y: input[4], z: input[5]}

    let distanceX = Math.pow(pointA.x - pointB.x, 2)
    let distanceY = Math.pow(pointA.y - pointB.y, 2)
    let distanceZ = Math.pow(pointA.z - pointB.z, 2)

    let dist = Math.sqrt(distanceX + distanceY + distanceZ)
    console.log(dist);
}

printDistance([1, 1, 0, 5, 4, 0])
printDistance([3.5, 0, 1, 0, 2, -1])