function isInsideTheVolume(input) {
    let box = {x1: 10, x2: 50, y1: 20, y2: 80, z1: 15, z2: 50}

    for (let i = 0; i < input.length; i += 3) {
        let point = {x: input[i], y: input[i + 1], z: input[i + 2]}

        if (inVolume(point.x, point.y, point.z, box)) {
            console.log('inside')
        } else {
            console.log('outside')
        }
    }

    function inVolume(x, y, z, box) {
        if (x >= box.x1 && x <= box.x2) {
            if (y >= box.y1 && y <= box.y2) {
                if (z >= box.z1 && z <= box.z2) {
                    return true
                }
            }
        }
        return false
    }
}

isInsideTheVolume([8, 20, 22])
isInsideTheVolume([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]
)